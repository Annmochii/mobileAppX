/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/users` | `/(write)/writeposts` | `/_sitemap` | `/signin` | `/signup` | `/users` | `/writeposts`;
      DynamicRoutes: `/(write)/writecomments/${Router.SingleRoutePart<T>}` | `/writecomments/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(write)/writecomments/[id]` | `/writecomments/[id]`;
    }
  }
}
