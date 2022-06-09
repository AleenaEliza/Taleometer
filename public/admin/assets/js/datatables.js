$(function(e) {
    
    	    var p_table = $('#output').DataTable({
    responsive: true,
    language: {
    searchPlaceholder: 'Search...',
    sSearch: '',
    lengthMenu: '_MENU_',
    },
    dom: 'Blfrtip',
    buttons: [{
      extend: "excelHtml5",
                text: 'Export Data',
                 title: "Nikkou - Output Report",
                filename: "Nikkou_Output_Report",
                titleAttr: "Export to Excel",
                exportOptions: {
                    columns: ":visible :not(.notexport)",
                    search: "applied",
                    order: "applied",
                    
                }
    }
    ],
    });
    
    $('#access_list').DataTable({
    responsive: true,
    language: {
    searchPlaceholder: 'Search...',
    sSearch: '',
    lengthMenu: '_MENU_',
    },
    
    "fnRowCallback" : function(nRow, aData, iDisplayIndex){
    $("td:first", nRow).html(iDisplayIndex +1);
    return nRow;
    },
    });
    var p_table = $('#payments_list').DataTable({
    responsive: true,
    language: {
    searchPlaceholder: 'Search...',
    sSearch: '',
    lengthMenu: '_MENU_',
    },
    dom: 'Blfrtip',
    buttons: [{
    extend: "excelHtml5",
                text: 'Export',
                 title: "Nikkou - Payment Report",
                filename: "Nikkou_Payment_Report",
                titleAttr: "Export to Excel",
                exportOptions: {
                    columns: ":visible :not(.notexport)",
                    search: "applied",
                    order: "applied",
                    
                }
    }
    ],
    });
    $('body').on('click','#export_payment',function(){  
    p_table.button( '.buttons-excel' ).trigger();
    });
	
	 $('#cards_list').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		},
		
        "rowCallback": function (nRow, aData, iDisplayIndex) {
		     var oSettings = this.fnSettings ();
		     $("td:first", nRow).html(oSettings._iDisplayStart+iDisplayIndex +1);
		     return nRow;
		},
	});
	
   $('#document_list').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		},
		"rowCallback": function (nRow, aData, iDisplayIndex) {
		     var oSettings = this.fnSettings ();
		     $("td:first", nRow).html(oSettings._iDisplayStart+iDisplayIndex +1);
		     return nRow;
		},
	});
   $('#branch_list').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		},"fnRowCallback" : function(nRow, aData, iDisplayIndex){
                $("td:first", nRow).html(iDisplayIndex +1);
               return nRow;
            },
	});
   $('#ic_list').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		},
		"fnRowCallback" : function(nRow, aData, iDisplayIndex){
                $("td:first", nRow).html(iDisplayIndex +1);
               return nRow;
            },
	});
   $('#roles_list').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		},
		"fnRowCallback" : function(nRow, aData, iDisplayIndex){
                $("td:first", nRow).html(iDisplayIndex +1);
               return nRow;
            },
	});
   $('#assign_roles_list').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	});
   $('#user_list').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		},
		"fnRowCallback" : function(nRow, aData, iDisplayIndex){
                $("td:first", nRow).html(iDisplayIndex +1);
               return nRow;
            },
	});
	$('#dump_list').DataTable({
		responsive: true,
		sDom: 'lrtip',
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		},
		"rowCallback": function (nRow, aData, iDisplayIndex) {
		     var oSettings = this.fnSettings ();
		     $("td:first", nRow).html(oSettings._iDisplayStart+iDisplayIndex +1);
		     return nRow;
		},
        "columnDefs": [
		    { "width": "45px", "targets": 0 }
		  ]
	});
	 $('#pending_doc_list').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		},
		"rowCallback": function (nRow, aData, iDisplayIndex) {
		     var oSettings = this.fnSettings ();
		     $("td:first", nRow).html(oSettings._iDisplayStart+iDisplayIndex +1);
		     return nRow;
		},
            "columnDefs": [
		    { "width": "45px", "targets": 0 }
		  ]
	});
    $('#deduction_list').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		},"rowCallback": function (nRow, aData, iDisplayIndex) {
		     var oSettings = this.fnSettings ();
		     $("td:first", nRow).html(oSettings._iDisplayStart+iDisplayIndex +1);
		     return nRow;
		},
            "columnDefs": [
		    { "width": "45px", "targets": 0 }
		  ]
	});
	var table = $('#example').DataTable({
		lengthChange: true,
		buttons: [ 
		{
                extend: "excelHtml5",
                text: 'Export Data',
                titleAttr: "Export to Excel",
                   title: "Nikkou - Report",
                filename: "Nikkou_Report",
                
                exportOptions: {
                    columns: ":visible :not(.notexport)",
                    search: "applied",
                    order: "applied",
                    
                }
         },
         ],
		responsive: true,
// 		"searching": false,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		},
		"rowCallback": function (nRow, aData, iDisplayIndex) {
		     var oSettings = this.fnSettings ();
		     $("td:first", nRow).html(oSettings._iDisplayStart+iDisplayIndex +1);
		     return nRow;
		},
	});
	table.buttons().container()
	.appendTo( '#example_wrapper .col-md-6:eq(0)' );		
	
	$('#example1').DataTable({
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	});
	
	var table = $('#example-delete').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	});
	 
    $('#example-delete tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );
	
	//Details display datatable
	$('#example-1').DataTable( {
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		},
		responsive: {
			details: {
				display: $.fn.dataTable.Responsive.display.modal( {
					header: function ( row ) {
						var data = row.data();
						return 'Details for '+data[0]+' '+data[1];
					}
				} ),
				renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
					tableClass: 'table border mb-0'
				} )
			}
		}
	} );
	$('#example4').DataTable();
	
	
	var table = $('#ratecards_table').DataTable({
		lengthChange: true,
		buttons: [ 
		{
                extend: "excelHtml5",
                text: 'Export Data',
                 title: "Nikkou - Ratecards",
                filename: "Nikkou_Ratecards",
                titleAttr: "Export to Excel",
                exportOptions: {
                    columns: ":visible :not(.notexport)",
                    search: "applied",
                    order: "applied",
                    
                }
         },
         ],
		responsive: true,
// 		"searching": false,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		},
		"rowCallback": function (nRow, aData, iDisplayIndex) {
		     var oSettings = this.fnSettings ();
		     $("td:first", nRow).html(oSettings._iDisplayStart+iDisplayIndex +1);
		     return nRow;
		},
	});
		table.buttons().container()
	.appendTo( '#ratecards_table_wrapper .col-md-6:eq(0)' );
	
	var table = $('#ic_table').DataTable({
		lengthChange: true,
		buttons: [ 
		{
                extend: "excelHtml5",
                text: 'Export Data',
                 title: "Nikkou - IC",
                filename: "Nikkou_IC",
                titleAttr: "Export to Excel",
                exportOptions: {
                    columns: ":visible :not(.notexport)",
                    search: "applied",
                    order: "applied",
                    
                }
         },
         ],
		responsive: true,
// 		"searching": false,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		},
		"rowCallback": function (nRow, aData, iDisplayIndex) {
		     var oSettings = this.fnSettings ();
		     $("td:first", nRow).html(oSettings._iDisplayStart+iDisplayIndex +1);
		     return nRow;
		},
	});
		table.buttons().container()
	.appendTo( '#ic_table_wrapper .col-md-6:eq(0)' );
	
	
	var table = $('#rc_report').DataTable({
		lengthChange: true,
		buttons: [ 
		{
                extend: "excelHtml5",
                text: 'Export Data',
                 title: "Nikkou - Ratecard Report",
                filename: "Nikkou_Ratecard_Report",
                titleAttr: "Export to Excel",
                exportOptions: {
                    columns: ":visible :not(.notexport)",
                    search: "applied",
                    order: "applied",
                    
                }
         },
         ],
		responsive: true,
// 		"searching": false,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		},
		"rowCallback": function (nRow, aData, iDisplayIndex) {
		     var oSettings = this.fnSettings ();
		     $("td:first", nRow).html(oSettings._iDisplayStart+iDisplayIndex +1);
		     return nRow;
		},
	});
		table.buttons().container()
	.appendTo( '#rc_report_wrapper .col-md-6:eq(0)' );
});