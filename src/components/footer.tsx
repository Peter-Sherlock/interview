export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white mt-auto">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="grid gap-6 text-sm text-neutral-500 sm:grid-cols-3">
          <div>
            <h4 className="mb-2 font-medium text-neutral-700">数据来源</h4>
            <p>
              岗位信息来自各企业官方招聘网站的公开页面，
              仅供参考，请以企业官方信息为准。
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-medium text-neutral-700">更新频率</h4>
            <p>数据每天自动更新一次。由于各企业页面结构可能变化，部分数据可能存在延迟。</p>
          </div>
          <div>
            <h4 className="mb-2 font-medium text-neutral-700">免责声明</h4>
            <p>
              本站为信息聚合导航，不对岗位真实性、投递结果负责。
              投递前请自行核实信息。
            </p>
          </div>
        </div>
        <div className="mt-6 border-t border-neutral-100 pt-4 text-center text-xs text-neutral-400">
          校招实习导航 &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
