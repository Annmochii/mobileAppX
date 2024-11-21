/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/profile` | `/(tabs)\` | `/(tabs)\users` | `/(write)/writeposts` | `/(write)\writecomments\[id]` | `/_sitemap` | `/profile` | `/signin` | `/signup` | `/writeposts`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
