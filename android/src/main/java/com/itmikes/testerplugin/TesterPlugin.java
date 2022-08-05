package com.itmikes.testerplugin;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Tester")
public class TesterPlugin extends Plugin {

    private Tester implementation = new Tester();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        System.out.println(this.bridge.getConfig().getPluginConfiguration("Tester").getString("logOnLoad"));

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }
}
