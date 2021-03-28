import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "icon-speedometer",
   
  },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  // {
  //   title: true,
  //   name: "Components"
  // },
  {
    name: "Employee",
    url: "/employee",
    icon: "fa fa-users",
    children: [
      {
        name: "Registration",
        url: "/employee/registration/:id",
        icon: "fa fa-arrow-right"
      },
      {
        name: "View Employees",
        url: "/employee/viewemployees",
        icon: "fa fa-arrow-right"
      }
    ]
  },
  {
    name: "Member",
    url: "/member",
    icon: "fa fa-user",
    children: [
      {
        name: "Registration",
        url: "/member/registration",
        icon: "fa fa-arrow-right"
      },
      {
        name: "View Members",
        url: "/member/viewmembers",
        icon: "fa fa-arrow-right"
      }
    ]
  },
  {
    name: "Payment",
    url: "/payment",
    icon: "fa fa-money",
    children: [
      {
        name: "Payment Submission",
        url: "/payment/paymentsubmission",
        icon: "fa fa-arrow-right"
      },
      {
        name: "Guest Payment Submission",
        url: "/payment/guestpaymentsubmission",
        icon: "fa fa-arrow-right"
      },
      {
        name: "Payment Details",
        url: "/payment/paymentdetails",
        icon: "fa fa-arrow-right"
      }
    ]
  },
  {
    name: "Reservation",
    url: "/reservation",
    icon: "fa fa-book",
    children: [
      {
        name: "Add Reservation",
        url: "/reservation/addreservation",
        icon: "fa fa-arrow-right"
      },
      {
        name: "View Reservation",
        url: "/reservation/viewreservation",
        icon: "fa fa-arrow-right"
      }
    ]
  },
  {
    name: "Reports",
    url: "/report",
    icon: "fa fa-print",
    children: [
      {
        name: "Reports",
        url: "/report/reportgen",
        icon: "fa fa-arrow-right"
      },
      
    ]
  },
  // {
  //   name: "Charts",
  //   url: "/charts",
  //   icon: "icon-pie-chart"
  // },
  // {
  //   name: "Icons",
  //   url: "/icons",
  //   icon: "icon-star",
  //   children: [
  //     {
  //       name: "CoreUI Icons",
  //       url: "/icons/coreui-icons",
  //       icon: "icon-star",
  //       badge: {
  //         variant: "success",
  //         text: "NEW"
  //       }
  //     },
  //     {
  //       name: "Flags",
  //       url: "/icons/flags",
  //       icon: "icon-star"
  //     },
  //     {
  //       name: "Font Awesome",
  //       url: "/icons/font-awesome",
  //       icon: "icon-star",
  //       badge: {
  //         variant: "secondary",
  //         text: "4.7"
  //       }
  //     },
  //     {
  //       name: "Simple Line Icons",
  //       url: "/icons/simple-line-icons",
  //       icon: "icon-star"
  //     }
  //   ]
  // },
  // {
  //   name: "Notifications",
  //   url: "/notifications",
  //   icon: "icon-bell",
  //   children: [
  //     {
  //       name: "Alerts",
  //       url: "/notifications/alerts",
  //       icon: "icon-bell"
  //     },
  //     {
  //       name: "Badges",
  //       url: "/notifications/badges",
  //       icon: "icon-bell"
  //     },
  //     {
  //       name: "Modals",
  //       url: "/notifications/modals",
  //       icon: "icon-bell"
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    divider: true
  }
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: { disabled: true },
  // },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // }
];
