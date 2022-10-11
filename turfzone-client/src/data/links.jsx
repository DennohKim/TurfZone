import { BiBookContent } from "react-icons/bi";
import { TbSoccerField } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";



export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'dashboard',
          icon: <MdOutlineDashboard />,
        },
      ],
    },
  
    {
      title: 'Playgrounds',
      links: [
        {
          name: 'turfs',
          icon: <TbSoccerField  />,
        },
      ],
    },

    {
        title: 'Bookings',
        links: [
          {
            name: 'bookings',
            icon: <BiBookContent  />,
          },
        ],
      },

]