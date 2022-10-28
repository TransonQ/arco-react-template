import { Menu } from '@arco-design/web-react'
import { IconCalendar, IconHome } from '@arco-design/web-react/icon'
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

export const LeftBar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleClick = useCallback((key) => navigate(key), [navigate])

  return (
    <Menu
      // defaultOpenKeys={[pathname]}
      // defaultSelectedKeys={[pathname]}
      selectedKeys={[pathname]} // 受控模式
      onClickMenuItem={handleClick}
      style={{ width: '100%' }}
    >
      <MenuItem key="/">
        <IconHome />
        Home
      </MenuItem>

      <SubMenu
        key="/item"
        title={
          <span>
            <IconCalendar />
            no routes
          </span>
        }
      >
        <MenuItem key="/item">item</MenuItem>
      </SubMenu>
    </Menu>
  )
}
