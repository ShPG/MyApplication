package com.example.sipg.myapplication;

import android.app.Activity;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {
    @Nullable
    @Override
    protected String getMainComponentName() {
        return "MyReactNativeApp";
    }
}
