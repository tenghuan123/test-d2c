/**
 * Header 组件
 * 来源: dsl/snapshots/semantic-skeleton.json
 */
export function Header() {
  return (
    <header className="flex flex-col w-[1920px] h-[81px]">
      {/* header/白色/1440以上 */}
      <div className="flex flex-row items-center gap-4 p-5">
        {/* 容器 2051 */}
        <div className="flex flex-row items-center gap-7">
          {/* Logo */}
          <Logo />
          
          {/* 容器 620 - 导航 */}
          <nav className="flex flex-row gap-1">
            <NavItem>首页</NavItem>
            <NavItem>案例</NavItem>
            <NavItem>课程</NavItem>
            <NavItem>合作</NavItem>
          </nav>
        </div>
        
        {/* 搜索按钮 */}
        <SearchButton />
        
        {/* 用户入口 */}
        <UserMenu />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="w-[126px] h-[22px]">
      {/* logo/no-box */}
    </div>
  );
}

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-2">
      {children}
    </div>
  );
}

function SearchButton() {
  return (
    <button className="w-[260px] h-10">
      搜索
    </button>
  );
}

function UserMenu() {
  return (
    <div className="w-[299px] h-9">
      用户入口
    </div>
  );
}

export default Header;
