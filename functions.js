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

    appendToContent('<img src="img/perfil.png"/>');
    appendToContent('Soy Ahmed y me gusta desarollar juegos y aplicaciones interactivas con software libre. También doy clases de programacón en la universidad. En esta página podrás encontrar información mía y de mis proyectos.');

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
    appendToContent('Maestro de francés desde el 2007 hasta el 2014');

    $("#content_list").toggle( "fade" );
  });
}

function appendProject(description,image_path,github_link,play_store_link)
{
    appendToContent(description+
                      '<table><tr><td><img src="'+image_path+'"/></td></tr>'+
                      '<tr><td><a href="'+github_link+'" target="_blank"><img src="img/git_logo.png"/></a>'+
                      '<a href="'+play_store_link+'" target="_blank"><img src="img/google_play_logo.png"/></a></td></tr></table>');
}

function setProyectosContent()
{
  $("#content_list").toggle( "fade", function() {
    clearContent();
    appendProject('<b>Guacamaya</b> juego para android','img/guacamaya.png','https://github.com/Turupawn/FlappyGuacamaya','https://play.google.com/store/apps/details?id=rosalila.flappy.guacamaya2');
    appendProject('<b>Space Shooter</b> juego para PC','img/space_shooter.png','https://github.com/Turupawn/FlappyGuacamaya','https://play.google.com/store/apps/details?id=rosalila.flappy.guacamaya2');

    $("#content_list").toggle( "fade" );
  });
}

function setGradoAcademicoContent()
{
  $("#content_list").toggle( "fade", function() {
    clearContent();

    appendToContentWithLink('Bachiller en ciencias y letras en el Liceo Franco Hondureño',"http://www.liceofranco.org/");
    appendToContentWithLink('Ingeniería en Sistmas Computacionales en UNTIEC',"http://www.unitec.edu/");

    $("#content_list").toggle( "fade" );
  });
}

function setContactoContent()
{
  $("#content_list").toggle( "fade", function() {
    clearContent();

    appendToContentWithLink('www.facebook.com/Turupawn',"http://www.facebook.com/Turupawn");

    $("#content_list").toggle( "fade" );
  });
}

