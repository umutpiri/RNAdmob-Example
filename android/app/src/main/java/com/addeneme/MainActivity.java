package com.addeneme;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.google.android.gms.ads.MobileAds;


public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        MobileAds.initialize(this, "{your admob Id}");
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "adDeneme";
    }
}
