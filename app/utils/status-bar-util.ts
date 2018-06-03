import { topmost } from 'ui/frame';
import { isIOS, isAndroid, device } from 'platform';
import * as app from 'application';

declare var android: any;

export const setStatusBarColors = () => {
  if (isIOS) {
      topmost().ios.controller.navigationBar = 1;
  }
  else if (isAndroid && device.sdkVersion >= "21") {
      let View = android.view.View;
      let window = app.android.startActivity.getWindow();
      let decorView = window.getDecorView();

      // Constant value to SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
      window.setStatusBarColor(0x000000);

      const androidStatusBar = View.SYSTEM_UI_FLAG_LAYOUT_STABLE
          | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
          | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
          | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;

      decorView.setSystemUiVisibility(androidStatusBar);
  }
  else {
      console.dir('==== Platform not found!');
  }
}
