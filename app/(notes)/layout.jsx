import Sidebar from '@/components/Sidebar'

const layout = ({children}) => {
  return (
    <div className=''>
        <Sidebar />
        <main>{children}</main>
    </div>
  )
}

export default layout