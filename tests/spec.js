describe('Protractor Prueba', function() {

    var misProductos = element(by.id('misproductos'));

    beforeEach(function() {
        browser.get('http://localhost:8080/#/');
    })

//Primera prueba Titulo
  it('Deberia tener un titulo', function() {
    
    expect(browser.getTitle()).toEqual('DojoAngular');
  });

  //Segunda prueba cambiar de pagina
  it('click in Mis Productos', function() {
    var tituloProducto = element(by.id('tituloProductos'));
    misProductos.click();

    expect(tituloProducto.getText()).toBe('Listado de productos adquiridos por el cliente.');

  });

  //Tercera prueba Buscar cliente
  it('Buscar un cliente', function() {
    var inputIngreso = findElement(by.class('form-control'));
    var row = element.all(by.repeater('item in productos').row(0).column('item.nombre'));
    inputIngreso.sendKeys(1936941186);

    expect(row.getText()).toBe('Cuenta bancaria');

  });

});