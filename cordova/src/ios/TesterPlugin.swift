import Foundation

@objc(TesterPlugin)
public class TesterPlugin: CAPPlugin {
    private lazy var implementation: Tester = Tester()

    override public func pluginInitialize() {
        super.pluginInitialize()
    }

    @objc func echo(_ command: CDVInvokedUrlCommand) {
        let call = createCall(command)
    
        print("[logOnEcho]: " + (cfg.getString("logOnEcho") ?? ""))

        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
