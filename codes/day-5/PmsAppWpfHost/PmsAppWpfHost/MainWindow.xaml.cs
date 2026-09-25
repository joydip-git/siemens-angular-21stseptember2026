using Microsoft.Web.WebView2.Core;
using System.Windows;

namespace PmsAppWpfHost
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            HostPmsAppAsync();
        }

        private async Task HostPmsAppAsync()
        {
            //initiaize the control's CoreWebView2 COM API
            await pmsWebView.EnsureCoreWebView2Async();

            //fecthing the CoreWebView2 COM API
            CoreWebView2 comAPI = pmsWebView.CoreWebView2;

            //accessing the functionality of the COM API to host the angular app
            comAPI.SetVirtualHostNameToFolderMapping(
                "siemens.com",
                Environment.CurrentDirectory + "//pms-app//browser",
                CoreWebView2HostResourceAccessKind.DenyCors
                );
            pmsWebView.Source = new Uri("http://siemens.com/index.html");
        }
    }
}