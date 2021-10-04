function CarrinhoCompras()
{
  Browsers.Item(btChrome).Run("http://lojaebac.ebaconline.art.br/");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageEbacShopPGinaDeTeste.headerTbayHeader.navHome.textnodeComprar.linkComprar.Click();
  let page = browser.pageLojaebacEbaconlineArtBrProdu;
  page.Wait();
  let section = page.sectionMainContainer;
  section.figureVerOpEs.linkAbominableHoodie.image05.Click();
  let page2 = browser.pageLojaebacEbaconlineArtBrProdu2;
  page2.Wait();
  let form = page2.sectionMainContainer.formSize;
  form.textnodeXs.textnodeXl.Click();
  form.textnodeBlue.textnodeRed.Click();
  form.buttonComprar.ClickButton();
  page2.Wait();
  page2.headerTbayHeader.sectionTbayMainmenu.textnodeComprar.linkComprar.Click();
  page.Wait();
  section.figureVerOpEs2.linkAeroDailyFitnessTee.image052.Click();
  page = browser.pageLojaebacEbaconlineArtBrProdu3;
  page.Wait();
  form = page.sectionMainContainer.formSize;
  form.textnodeXs.textnodeXl.Click();
  form.textnodeBlack.textnodeYellow.Click();
  form.buttonComprar.ClickButton();
  page.Wait();
  page.sectionMainContainer2.linkVerCarrinho.Click();
  Tables.panelImage.Check();
}