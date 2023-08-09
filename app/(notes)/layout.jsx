import SideMenu from '@/components/Sidebar'

const layout = ({children}) => {
  return (
    <div className=''>
        <SideMenu />
        <main>{children}</main>
    </div>
  )
}

export default layout