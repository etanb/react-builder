var TYPE = {
  NI:'navItem',
  L:'Lead',
  T:'Test',
};

var data = [
  {
    type: TYPE.NI,
    id: 'navToday',
    label: 'Today',
    icon: 'today',
    routeName: 'home',
    iconGroup: 'standard',
    bookMarked: true,
  },
  {
    type: TYPE.NI,
    id: 'navDashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    routeName: 'dashboard',
    iconGroup: 'standard',
    bookMarked: true,
  },
  {
    type: TYPE.NI,
    id: 'navTasks',
    label: 'Tasks',
    icon: 'task',
    routeName: 'tasks',
    iconGroup: 'standard',
    bookMarked: true,
  },
  {
    type: TYPE.NI,
    id: 'navNotes',
    label: 'Notes',
    icon: 'new_notebook',
    routeName: 'notes',
    iconGroup: 'action',
    bookMarked: true,
  },
  {
    type: TYPE.NI,
    id: 'navFeed',
    label: 'Feed',
    icon: 'feed',
    routeName: 'feed',
    iconGroup: 'standard',
    bookMarked: true,
  },
  {
    type: TYPE.NI,
    id: 'navLeads',
    label: 'Leads',
    icon: 'lead',
    routeName: 'lead',
    iconGroup: 'standard',
    bookMarked: true,
  },
  {
    type: TYPE.NI,
    id: 'navContacts',
    label: 'Contacts',
    icon: 'contact',
    routeName: 'contact',
    iconGroup: 'standard',
    bookMarked: true,
  },
  {
    type: TYPE.NI,
    id: 'navAccounts',
    label: 'Accounts',
    icon: 'account',
    routeName: 'account',
    iconGroup: 'standard',
    bookMarked: true,
  },
  {
    type: TYPE.NI,
    id: 'navOpptys',
    label: 'Opportunities',
    icon: 'opportunity',
    routeName: 'kanban',
    iconGroup: 'standard',
    bookMarked: true,
  },
  {
    type: TYPE.NI,
    id: 'navFiles',
    label: 'Files',
    icon: 'file',
    routeName: 'files',
    iconGroup: 'standard',
    bookMarked: true,
  },
  {
    type: TYPE.NI,
    id: 'navGroups',
    label: 'Groups',
    icon: 'new_group',
    routeName: 'groups',
    iconGroup: 'action',
    bookMarked: true,
  },
  {
    type: TYPE.NI,
    id: 'navPeople',
    label: 'People',
    icon: 'people',
    routeName: 'people',
    iconGroup: 'standard',
    bookMarked: true,
  },
  {
    type: TYPE.NI,
    id: 'navEvents',
    label: 'Events',
    icon: 'event',
    routeName: 'events',
    iconGroup: 'standard',
    bookMarked: true,
  },
  {
    type: TYPE.NI,
    id: 'navReports',
    label: 'Reports',
    icon: 'report',
    routeName: 'reports',
    iconGroup: 'standard',
    bookMarked: true,
  },

  {
    type: TYPE.T,
    id: 'l01',
    name: {
      label: 'Name',
      titleName: {
        label: 'Title',
        content: 'Ms.'
      },
      firstName: {
        label: 'First Name',
        content: 'Seimith',
      },
      lastName: {
        label: 'Last Name',
        content: 'Suth',
      }
    },
    leadOwner: {
      label: 'Lead Owner',
      titleName: {
        label: 'Title',
        content: 'Mr.'
      },
      firstName: {
        label: 'First Name',
        content: 'Reza',
      },
      lastName: {
        label: 'Last Name',
        content: 'Jalali',
      }
    },
    info: {
      company: {
        label: 'Company',
        content: "SuthCo."
      },
      title: {
        label: 'Title',
        content: 'Owner'
      },
      website: {
        label: 'Website',
        content: 'http://www.suth.co'
      },
      leadStatus: {
        label: 'Lead Status',
        content: 'New',
        leadStatusReason: {
          label: 'Reason',
          content: 'None'
        },
      },
      leadStatusReason: {
        label: 'Reason',
        content: 'None'
      },
      account: {
        label: 'Account',
        content: '-'
      },
      rating: {
        label: 'Rating',
        content: 'Premium Yield'
      },
      closingDate: {
        label: 'Closing Date',
        content: 'Closing 05/09/2015'
      },
      amount: {
        label: 'Amount',
        content: '3,900,000'
      }
    },
    communication: {
      address: {
        address1: {
          label: 'Business Address',
          street_address: '1 Ferry Building',
          city: 'San Francisco',
          state: 'CA',
          zip: '94105',
          country: 'United States'
        },
      },
      phone: {
        phone1: {
          label: 'Business',
          content1: '800',
          content2: '981',
          content3: '0125'
        },
        phone2:{
          label: 'Mobile',
          content1: '415',
          content2: '312',
          content3: '0979'
        },
      },
      email: {
        label: 'Email',
        content: 'suth@suth.co'
      }
    },
  },

  {
    type: TYPE.L,
    id: 'l01',
    name: {
      label: 'Name',
      titleName: {
        label: 'Title',
        content: 'Ms.'
      },
      firstName: {
        label: 'First Name',
        content: 'Lei',
      },
      lastName: {
        label: 'Last Name',
        content: 'Chan',
      }
    },
    leadOwner: {
      label: 'Lead Owner',
      titleName: {
        label: 'Title',
        content: 'Mr.'
      },
      firstName: {
        label: 'First Name',
        content: 'Fish',
      },
      lastName: {
        label: 'Last Name',
        content: 'Oader',
      }
    },
    info: {
      company: {
        label: 'Company',
        content: "Bob's Burgers"
      },
      title: {
        label: 'Title',
        content: 'Owner'
      },
      website: {
        label: 'Website',
        content: 'http://www.bobsburgersonthewarf.com'
      },
      leadStatus: {
        label: 'Lead Status',
        content: 'New',
        leadStatusReason: {
          label: 'Reason',
          content: 'None'
        },
      },
      leadStatusReason: {
        label: 'Reason',
        content: 'None'
      },
      account: {
        label: 'Account',
        content: '-'
      },
      rating: {
        label: 'Rating',
        content: 'Junk Yield'
      },
      closingDate: {
        label: 'Closing Date',
        content: 'Closing 05/09/2015'
      },
      amount: {
        label: 'Amount',
        content: '800,000'
      }
    },
    communication: {
      address: {
        address1: {
          label: 'Business Address',
          street_address: '1 Ferry Building',
          city: 'San Francisco',
          state: 'CA',
          zip: '94105',
          country: 'United States'
        },
      },
      phone: {
        phone1: {
          label: 'Business',
          content1: '800',
          content2: '981',
          content3: '0125'
        },
        phone2:{
          label: 'Mobile',
          content1: '415',
          content2: '312',
          content3: '0979'
        },
      },
      email: {
        label: 'Email',
        content: 'bob@bobsburgers.com'
      }
    },
  },

  {
    type: TYPE.L,
    id: 'l02',
    name: {
      label: 'Name',
      titleName: {
        label: 'Title',
        content: 'Dr.'
      },
      firstName: {
        label: 'First Name',
        content: 'Otatade',
      },
      lastName: {
        label: 'Last Name',
        content: 'Bello',
      }
    },
    leadOwner: {
      label: 'Lead Owner',
      titleName: {
        label: 'Title',
        content: ''
      },
      firstName: {
        label: 'First Name',
        content: 'Avitree',
      },
      lastName: {
        label: 'Last Name',
        content: 'Tobarin',
      }
    },
    info: {
      company: {
        label: 'Company',
        content: "Brello Labs"
      },
      title: {
        label: 'Title',
        content: 'Owner'
      },
      website: {
        label: 'Website',
        content: 'http://www.bellolabs.com'
      },
      leadStatus: {
        label: 'Lead Status',
        content: 'Qualified'
      },
      account: {
        label: 'Account',
        content: '-'
      },
      rating: {
        label: 'Rating',
        content: 'Premium Yield'
      },
      closingDate: {
        label: 'Closing Date',
        content: 'Closing 05/09/2015'
      },
      amount: {
        label: 'Amount',
        content: '8,000,000'
      }
    },
    communication: {
      address: {
        address1: {
          label: 'Business Address',
          street_address: '11000 Cedar Avenue',
          city: 'Cleveland',
          state: 'OH',
          zip: '44106',
          country: 'United States'
        },
      },
      phone: {
        phone1: {
          label: 'Business',
          content1: '415',
          content2: '621',
          content3: '3325'
        },
        phone2:{
          label: 'Mobile',
          content1: '415',
          content2: '312',
          content3: '0979'
        },
      },
      email: {
        label: 'Email',
        content: 'bello@bellolabs.com'
      }
    },
  },

  {
    type: TYPE.L,
    id: 'l03',
    name: {
      label: 'Name',
      titleName: {
        label: 'Title',
        content: ''
      },
      firstName: {
        label: 'First Name',
        content: 'Alison',
      },
      lastName: {
        label: 'Last Name',
        content: 'Inglis',
      }
    },
    leadOwner: {
      label: 'Lead Owner',
      titleName: {
        label: 'Title',
        content: ''
      },
      firstName: {
        label: 'First Name',
        content: 'Nasro',
      },
      lastName: {
        label: 'Last Name',
        content: 'Farro',
      }
    },
    info: {
      company: {
        label: 'Company',
        content: "Cheesecake & Co."
      },
      title: {
        label: 'Title',
        content: 'Owner'
      },
      website: {
        label: 'Website',
        content: 'http://www.cakeandco.com'
      },
      leadStatus: {
        label: 'Lead Status',
        content: 'New'
      },
      account: {
        label: 'Account',
        content: '-'
      },
      rating: {
        label: 'Rating',
        content: 'Premium Yield'
      },
      closingDate: {
        label: 'Closing Date',
        content: 'Closing 05/09/2015'
      },
      amount: {
        label: 'Amount',
        content: '8,000,000'
      }
    },
    communication: {
      address: {
        address1: {
          label: 'Business Address',
          street_address: '222 W 238th St',
          city: 'Bronx',
          state: 'NY',
          zip: '91273',
          country: 'United States'
        },
      },
      phone: {
        phone1: {
          label: 'Business',
          content1: '718',
          content2: '549',
          content3: '3888'
        },
        phone2:{
          label: 'Mobile',
          content1: '415',
          content2: '312',
          content3: '0979'
        },
      },
      email: {
        label: 'Email',
        content: 'ali@cakeandco.com'
      }
    },
  },

  {
    type: TYPE.L,
    id: 'l04',
    name: {
      label: 'Name',
      titleName: {
        label: 'Title',
        content: ''
      },
      firstName: {
        label: 'First Name',
        content: 'Avitree',
      },
      lastName: {
        label: 'Last Name',
        content: 'Tobarin',
      }
    },
    leadOwner: {
      label: 'Lead Owner',
      titleName: {
        label: 'Title',
        content: 'Dr.'
      },
      firstName: {
        label: 'First Name',
        content: 'Reza',
      },
      lastName: {
        label: 'Last Name',
        content: 'Jalali',
      }
    },
    info: {
      company: {
        label: 'Company',
        content: "Treelytics"
      },
      title: {
        label: 'Title',
        content: 'Owner'
      },
      website: {
        label: 'Website',
        content: 'http://www.treelytics.com'
      },
      leadStatus: {
        label: 'Lead Status',
        content: 'Qualified'
      },
      account: {
        label: 'Account',
        content: '-'
      },
      rating: {
        label: 'Rating',
        content: 'Premium Yield'
      },
      closingDate: {
        label: 'Closing Date',
        content: 'Closing 05/09/2015'
      },
      amount: {
        label: 'Amount',
        content: '8,000,000'
      }
    },
    communication: {
      address: {
        address1: {
          label: 'Business Address',
          street_address: '500 Arguello Street',
          city: 'Redwood City',
          state: 'CA',
          zip: '94063',
          country: 'United States'
        },
      },
      phone: {
        phone1: {
          label: 'Business',
          content1: '888',
          content2: '446',
          content3: '4737'
        },
        phone2:{
          label: 'Mobile',
          content1: '415',
          content2: '312',
          content3: '0979'
        },
      },
      email: {
        label: 'Email',
        content: 'avi@treelytics.com'
      }
    },
  },
];



module.exports = {
  TYPE, data
};
