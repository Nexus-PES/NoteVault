import Sidebar from '@/components/Sidebar'

const layout = ({children}) => {
  return (
    <div className='flex gap-0'>
        <Sidebar />
        <main>{children}</main>
    </div>
  )
}

export default layout