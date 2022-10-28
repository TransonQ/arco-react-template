import { FreshPage } from '@/components/FreshPage/FreshPage'
import { Layout } from '@arco-design/web-react'
import { IconCaretLeft, IconCaretRight } from '@arco-design/web-react/icon'
import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderBar } from '../header/HeaderBar'
import { LeftBar } from '../sider/LeftBar'
import './root.css'

const Sider = Layout.Sider
const Header = Layout.Header
const Content = Layout.Content

export const Root = () => {
  const [collapsed, setCollapsed] = useState(false)
  const handleCollapsed = () => setCollapsed((b) => !b)

  return (
    <Suspense fallback={<FreshPage />}>
      <Layout className="layout_frame">
        <Sider
          collapsed={collapsed}
          onCollapse={handleCollapsed}
          collapsible
          trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
          breakpoint="xl"
        >
          <div className="logo"></div>
          <LeftBar />
        </Sider>
        <Layout>
          <Header>
            <HeaderBar />
          </Header>
          <Layout>
            <Content>
              <Outlet />
            </Content>
            <Layout.Footer></Layout.Footer>
          </Layout>
        </Layout>
      </Layout>
    </Suspense>
  )
}
