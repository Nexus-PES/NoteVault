import SideMenu from "../../components/Sidebar"

const layout = ({children}) => {
  return (
    <div className=''>
        <SideMenu />
        <main className="ml-16">{children}</main>
    </div>
  )
}

export default layout