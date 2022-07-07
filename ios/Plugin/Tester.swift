import Foundation

@objc public class Tester: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
