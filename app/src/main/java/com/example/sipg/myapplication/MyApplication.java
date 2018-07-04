package com.example.sipg.myapplication;

import android.app.Application;

import com.facebook.react.*;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

/**
 * Created by sipg on 18/4/12.
 */

public class MyApplication extends Application    implements ReactApplication{


    private final ReactNativeHost mReactNativeHost=new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return com.facebook.react.BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(new MainReactPackage());
        }
    };


    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}
