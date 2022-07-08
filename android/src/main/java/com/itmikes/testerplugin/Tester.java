package com.itmikes.testerplugin;

import android.util.Log;

public class Tester {

    public String echo(String value) {
        Log.i("Echo", value);
        return "NATIVE(Android)-" + value;
    }
}
