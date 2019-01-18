# Instalar

```
ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic-native/sqlite@beta
```

## Configurar el module

https://beta.ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module

``` typescript

import { SQLite } from '@ionic-native/sqlite/ngx'

@NgModule({
  declarations: [AppComponent, PreguntasComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

```