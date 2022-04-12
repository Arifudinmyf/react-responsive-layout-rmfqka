const sidebarService = {

  getSidebarItems: () => {

    return [
      {
        text: 'Dashboard',
        link: '/dashboard',
        icon: 'dashboard'
      },
      {
        text: 'Reports',
        link: '/company-setup',
        icon: 'supervisor_account'
      },
      {
        text: 'Admin',
        icon: 'settings_applications',
        subItems: [
          {
            text: 'Users',
            link: '',
            icon: 'person'
          },
          {
            text: 'Roles',
            link: '',
            icon: 'wc'
          }
        ]
      },
      {
        text: 'Help',
        link: '/help',
        icon: 'help'
      },
      
    ];
  }
}

export default sidebarService;