export class NavigationModel
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'applications',
                'title'   : 'sacsac',
                'type'    : 'group',
                'children': [
                    {
                        'id'   : 'sample',
                        'title': 'DashBoard',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/sample',
                    },
                  
                    {
                        'id'   : 'sample',
                        'title': 'Extensions',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/extension',
                     
                    },
                    {
                        'id'   : 'sample',
                        'title': 'Contacts',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/account',
                    
                    },
                    {
                        'id'   : 'sample',
                        'title': 'SIP Trunk',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/trunk',
                     
                    },
                    {
                        'id'   : 'sample',
                        'title': 'Inbound Rules',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/inbound',
                     
                    },
               
                    {
                        'id'   : 'sample',
                        'title': 'Outbound Rules',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/outbound',
                     
                    },
                    {
                        'id'   : 'sample',
                        'title': 'Ring Group',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/ring',
                     
                    },
                    {
                        'id'   : 'sample',
                        'title': 'Receptionist',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/receptionist',
                     
                    }
                ]
            }
        ];
    }
}
