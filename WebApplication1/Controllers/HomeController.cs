using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult GenXML()
        {
            XmlDocument doc = new XmlDocument();

            XmlDeclaration xmldecl;

            //指定為UTF-8
            xmldecl = doc.CreateXmlDeclaration("1.0", null, null);
            xmldecl.Encoding = "UTF-8";
            XmlElement root = doc.DocumentElement;
            doc.InsertBefore(xmldecl, root);

            //產生XML結構
            XmlElement Dept = doc.CreateElement("Dept");
            doc.AppendChild(Dept);

            XmlElement RD = doc.CreateElement("RD");
            Dept.AppendChild(RD);

            doc.Save(@"D:\temp.xml");
            return View();
        }





        //public void ExportToXML()
        //{

        //    //var data = db.PersonalDetails.ToList();
        //    var data = "";
        //    Response.ClearContent();
        //    Response.Buffer = true;
        //    Response.AddHeader("content-disposition", "attachment;filename = itfunda.xml");
        //    Response.ContentType = "text/xml";

        //    var serializer = new System.Xml.Serialization.XmlSerializer(data.GetType());
        //    serializer.Serialize(Response.OutputStream, data);
        //}



    }
}