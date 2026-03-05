/**
 * Footer 组件
 * 来源: dsl/snapshots/semantic-skeleton.json
 */
export function Footer() {
  return (
    <footer className="flex flex-col w-[1920px] h-[490px] bg-gray-900">
      {/* 容器 1128 */}
      <div className="flex flex-col items-center gap-8 p-10">
        {/* 版权信息 - footer-son-bottom */}
        <Copyright />
        
        {/* 备案信息 */}
        <FooterLinks />
      </div>
    </footer>
  );
}

function Copyright() {
  return (
    <div className="flex flex-row justify-center gap-7 text-gray-400 text-sm">
      <span>增值电信业务经营许可证：川B2-20160192</span>
      <span>蜀ICP备12020238号-4</span>
      <span>川公网安备51019002000262</span>
      <span>广播电视节目制作经营许可证（川）字第20170号</span>
      <span>违法和不良信息举报中心</span>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="flex flex-row gap-4">
      <a href="#" className="text-gray-400 hover:text-white">关于我们</a>
      <a href="#" className="text-gray-400 hover:text-white">联系我们</a>
      <a href="#" className="text-gray-400 hover:text-white">隐私政策</a>
    </div>
  );
}

export default Footer;
