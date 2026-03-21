import type { BaseCrawlerAdapter } from "./base";
import { GenericAdapter } from "./adapters/generic";
import { BytedanceAdapter } from "./adapters/bytedance";

/**
 * 适配器注册中心
 * 所有适配器在此注册，通过 ID 查找
 */
const adapters: Map<string, BaseCrawlerAdapter> = new Map();

// 注册所有适配器
function register(adapter: BaseCrawlerAdapter) {
  adapters.set(adapter.id, adapter);
}

// ===== 注册适配器 =====
register(new GenericAdapter());
register(new BytedanceAdapter());
// TODO: 添加更多适配器
// register(new TencentAdapter());
// register(new AlibabaAdapter());
// register(new MeituanAdapter());

/**
 * 根据 ID 获取适配器
 * 如果找不到指定适配器，返回通用适配器
 */
export function getAdapter(id: string | null): BaseCrawlerAdapter {
  if (id && adapters.has(id)) {
    return adapters.get(id)!;
  }
  return adapters.get("generic")!;
}

/** 获取所有已注册适配器 ID */
export function listAdapterIds(): string[] {
  return Array.from(adapters.keys());
}
