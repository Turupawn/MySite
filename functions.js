function changeText(element_id,text)
{
  $('#'+element_id).text(text);
}

function clearContent()
{
  $('#content_list').empty();
}

function appendToContent(text)
{
  $("#content_list").append(getLi(text));
}

function appendToContentWithLink(text,link)
{
  $("#content_list").append(getLiWithLink(text,link));
}

function getLi(text)
{
  return '<li><span class="tab">'+text+'</span></li>';
}

function getLiWithLink(text, link)
{
  return '<li><a href="'+link+'"><span class="tab">'+text+'</span></a></li>';
}

function setHomeContent()
{
  $("#content_list").toggle( "fade", function() {
    clearContent();

    appendToContent('Home1');
    appendToContent('Home2');
    appendToContentWithLink('Home3',"https://www.google.com");

    $("#content_list").toggle( "fade" );
  });
}

function setProgramacionContent()
{
  $("#content_list").toggle( "fade", function() {
    clearContent();

    appendToContent('Android');
    appendToContent('Engine para fighters en C++');
    appendToContent('Engine para shooters en C++');
    appendToContent('Ruby on Rails');
    appendToContent('Crypto currencies api');
    appendToContentWithLink('github.com/Turupawn', 'http://www.github.com/Turupawn');

    $("#content_list").toggle( "fade" );
  });
}

function setDocenciaContent()
{
  $("#content_list").toggle( "fade", function() {
    clearContent();

    appendToContent('Programación 1 en Ceutec');
    appendToContent('Programación 2 en Ceutec');
    appendToContent('Programación 3 en Unitec');
    appendToContent('Lab. de Programación 1 en Unitec');
    appendToContent('Lab. de Programación 2 en Unitec');
    appendToContent('Lab. de Programación 3 en Unitec');

    $("#content_list").toggle( "fade" );
  });
}

function setMusicaContent()
{
  $("#content_list").toggle( "fade", function() {
    clearContent();

    appendToContentWithLink('Música para juegos hecha en LMMS','http://lmms.sourceforge.net/');
    appendToContentWithLink('soundcloud.com/Turupawn','https://soundcloud.com/Turupawn');

    $("#content_list").toggle( "fade" );
  });
}

function setGraficosContent()
{
  $("#content_list").toggle( "fade", function() {
    clearContent();

    appendToContentWithLink('Gráficos para juegos hechos en inkscape','http://inkscape.org/es/');
    appendToContentWithLink('Gráficos para juegos hechos en gimp','http://www.gimp.org/');
    appendToContentWithLink('Turupawn.deviantart.com','https://Turupawn.deviantart.com');

    $("#content_list").toggle( "fade" );
  });
}

function setFrancesContent()
{
  $("#content_list").toggle( "fade", function() {
    clearContent();

    appendToContent('Docente de francés durante 8 años (de 2007 a 2014)');
    appendToContent('Corrector DELF/DALF A1 y A2');

    $("#content_list").toggle( "fade" );
  });
}
