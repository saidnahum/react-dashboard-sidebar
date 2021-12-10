import { BsVectorPen as Pen } from 'react-icons/bs';
import { AiOutlineDashboard as Dashboard } from 'react-icons/ai';
import { BiBookContent as Content } from 'react-icons/bi';

const menu = [
   {
      name: "Dashboar",
      to: "/",
      icon: <Dashboard/>
   },
   {
      name: "Content",
      to: '/content',
      icon: <Content/>,
      subMenus: [{ name: "Courses" }, { name: "Videos" }]
   },
   {
      name: "Design",
      icon: <Pen/>,
      to: "/design"
   }
]

export default menu;