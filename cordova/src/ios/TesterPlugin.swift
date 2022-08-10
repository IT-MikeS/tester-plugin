import Foundation

@objc(TesterPlugin)
public class TesterPlugin: CAPPlugin {
    private lazy var implementation: Tester = Tester()

    override public func pluginInitialize() {
        super.pluginInitialize()
        let cfg = getConfig("Tester")
        print("[logOnLoad]: " + (cfg.getString("logOnLoad") ?? "No logOnLoad set."))
    }

    @objc func echo(_ command: CDVInvokedUrlCommand) {
        let call = createCall(command)
    
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
