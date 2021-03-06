import { UniDriver } from 'wix-ui-test-utils/unidriver';

/**
 * Safe getNative that returns `null` if the element doesn't exist.
 * (Instead of throwing an Error)
 */
export async function safeGetNative<T>(base: UniDriver<T>) {
  return (await base.exists()) ? base.getNative() : null;
}

export const byDataHook = (dataHook: string) => `[data-hook="${dataHook}"]`;
