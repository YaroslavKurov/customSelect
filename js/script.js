/*SUMMOSELECT*/
	if ($('.js-select').length > 0) {
		$('.js-select').each( function(i, item) {
			var $this = $(this),
				attr = $this.attr('multiple'),
				settings = {
					placeholder: $this.data('title'),
					csvDispCount: 20,
					floatWidth: 0,
					nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
				};

			if ($this.attr('multiple')) {
				settings.selectAll = true;
				settings.selectAlltext = $this.data('select');
			}

			$this.SumoSelect(settings);
		});
		$('.SumoSelect').each(function(){
			var $select = $(this),
				$wrapper = $select.find('.optWrapper'),
				$caption = $select.find('.CaptionCont');

			$caption.on('click', function(e) {
				if ($wrapper.find('.options li').length > 4) {
					$wrapper.jScrollPane({
						contentWidth: '0px',
						verticalDragMinHeight : 12,
						verticalDragMaxHeight: 12,
						mouseWheelSpeed: 50,
						animateScroll: true,
						animateDuration: 100
					});
				} 
			});
		});
	}
/*SUMMOSELECT*/
