Ext.define('Company.my.List', {
  extend: 'Ext.Panel',
  height: 500,
  width: 300,
  title: this.title,
  // layout: 'row',
  style: {
    margin: '1rem auto'
  },

  items: [
    {
      icon: 'exclamation.png',
      xtype: 'component',
      html: '<h1>Missing</h1>'
    },
    {
      xtype: 'component',
      html: `
    
          <ul>
              <li>first</li>
              <li>second</li>
          </ul>`
    }
  ]
});
