/**
 * Page 页面组件
 * 基于 semantic-skeleton.json 自动生成
 * 
 * 结构分析:
 * - header-1440-1: Header (顶部导航)
 * - 3810-2: Section (主要内容区)
 * - 1440px-3: Footer (底部)
 */

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { Image } from './components/Image';
import { Badge } from './components/Badge';
import { Icon } from './components/Icon';
import { List, ListItem } from './components/List';
import { Title } from './components/Title';
import { Description } from './components/Description';
import { Banner } from './components/Banner';

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Header 模块 */}
      <Header />
      
      {/* Main Content: 容器 3810 */}
      <main className="flex flex-row gap-6 p-11">
        {/* 左侧: 容器 3615 - 侧边导航 */}
        <aside className="w-[360px]">
          <SideNav />
        </aside>
        
        {/* 中间: 容器 3809 - 主要内容 */}
        <section className="flex-1">
          <MainContent />
        </section>
      </main>
      
      {/* Footer 模块 */}
      <Footer />
    </div>
  );
}

/**
 * 侧边导航组件
 * 来源: son-list-c3d6d542 (重复13次)
 */
function SideNav() {
  return (
    <nav>
      <List direction="column" gap={2}>
        <ListItem active>
          <SideNavItem label="主页信息" icon="home" active />
        </ListItem>
        <ListItem>
          <SideNavItem label="广告语" icon="megaphone" />
        </ListItem>
        <ListItem>
          <SideNavItem label="全部作品" icon="folder" />
        </ListItem>
        <ListItem>
          <SideNavItem label="热门推荐" icon="fire" />
        </ListItem>
        <ListItem>
          <SideNavItem label="最新动态" icon="newspaper" />
        </ListItem>
        <ListItem>
          <SideNavItem label="关于我们" icon="users" />
        </ListItem>
      </List>
    </nav>
  );
}

function SideNavItem({ label, icon, active }: { label: string; icon?: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}>
      {icon && <Icon name={icon} size={18} />}
      <span className="font-medium">{label}</span>
    </div>
  );
}

/**
 * 主要内容区组件
 */
function MainContent() {
  return (
    <div className="flex flex-col gap-8">
      {/* Banner 区域 */}
      <Banner 
        title="欢迎来到 VJSHI"
        description="发现优质设计案例，开启创意之旅"
      />
      
      {/* 筛选栏 */}
      <FilterBar />
      
      {/* 案例列表 */}
      <CaseList />
    </div>
  );
}

/**
 * 筛选栏组件
 */
function FilterBar() {
  return (
    <div className="flex items-center gap-4 p-4 bg-white border rounded-lg">
      <span className="text-gray-600">筛选:</span>
      <Badge>全部</Badge>
      <Badge>UI设计</Badge>
      <Badge>品牌设计</Badge>
      <Badge>插画</Badge>
      <Badge>摄影</Badge>
    </div>
  );
}

/**
 * 案例列表组件
 * 来源: card-38aa4e40 (重复12次)
 */
function CaseList() {
  const cases = [
    { id: 1, title: '精品民宿品牌设计', tags: ['品牌', 'UI'], image: '/images/case-1.jpg' },
    { id: 2, title: '智能家居APP界面', tags: ['UI', '移动端'], image: '/images/case-2.jpg' },
    { id: 3, title: '新能源汽车官网', tags: ['官网', '响应式'], image: '/images/case-3.jpg' },
    { id: 4, title: '社交APP界面设计', tags: ['UI', '社交'], image: '/images/case-4.jpg' },
    { id: 5, title: '电商小程序', tags: ['小程序', '电商'], image: '/images/case-5.jpg' },
    { id: 6, title: '企业文化墙设计', tags: ['品牌', '印刷'], image: '/images/case-6.jpg' },
  ];
  
  return (
    <div className="grid grid-cols-3 gap-6">
      {cases.map(caseItem => (
        <Card 
          key={caseItem.id}
          title={caseItem.title}
          image={caseItem.image}
          tags={caseItem.tags}
        />
      ))}
    </div>
  );
}
