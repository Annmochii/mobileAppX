/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/users` | `/(write)/writecomments` | `/(write)/writeposts` | `/(write)\writecomments\[id]` | `/_sitemap` | `/signin` | `/signup` | `/users` | `/writecomments` | `/writeposts`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
