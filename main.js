$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTab a[href="#profile"]').tab('show') // Выбрать вкладку по имени
$('#myTab a:first').tab('show') // Выбрать первую вкладку
$('#myTab a:last').tab('show') // Выбрать последнюю вкладку
$('#myTab li:eq(2) a').tab('show') //Выбрать третью вкладку (в 0-indexed)