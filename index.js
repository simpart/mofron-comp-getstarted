/**
 * @file mofron-comp-getstarted/index.js
 * @brief get-start component
 * @license MIT
 */
const ConfArg   = mofron.class.ConfArg;
const Component = mofron.class.Component;
const Text     = require('mofron-comp-text');
const Image    = require('mofron-comp-image');
const Button   = require('mofron-comp-button');
const HrzPos   = require('mofron-effect-hrzpos');
const loMargin = require('mofron-layout-margin');

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("GetStarted");
	    //this.shortForm(""); // please set short form parameter name
            
	    /* init config */
            this.confmng().add('start', { type:'string' });

	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.style({ 'position':'relative' });
            
	    // landing image setting
	    this.image().config({
	        size: new ConfArg('80%','3.5rem'),
		effect: new HrzPos()
            });
	    this.child(this.image());

            // text setting
            this.text1().config({
                size: '0.35rem',
                style: { 'text-align':'center' }
            });
            this.text2().config({
                size: '0.32rem',
                style: { 'text-align':'center' }
            });

            // button setting
            this.button().config({
	        text:       "Get Started",
                size:       new ConfArg('4rem','0.4rem'),
                effect:     new HrzPos(),
                clickEvent: new ConfArg(
                    (c1,c2,c3) => {
                        try {
                            if (null !== c3.start()) {
                                window.location.href = c3.start();
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    },
                    this
                )
            });
            
            /* contents area */
	    let conts_area = new Component();
	    conts_area.style({
                'position': 'absolute',
		'top':      '0.5rem',
		'left':     '0rem',
		'right':    '0rem',
		'margin':   'auto'
	    });
	    conts_area.layout(new loMargin('top','0.3rem'));
            conts_area.child([
                new Component([this.text1(), this.text2(), this.button()]),
            ]);

	    this.child(conts_area);
	    this.childDom(conts_area.childDom());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    image (prm, opc) {
        try {
	    if ('string' === typeof prm) {
	        this.image().src(prm);
		if ('number' === typeof opc) {
		    this.image().style({ 'opacity':opc });
		}
                return;
	    }
            return this.innerComp('image',prm, Image);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    imageSize (wid, hei) {
        try {
            this.image().size(wid, hei);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    text (txt1, txt2) {
        try {
            this.text1(txt1);
            this.text2(txt2);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    text1 (prm, cnf) {
        try {
            if ('string' === typeof prm) {
                this.text1().text(prm);
		this.text1().config(cnf);
                return;
            }
            return this.innerComp('text1',prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    text2 (prm, cnf) {
        try {
            if ('string' === typeof prm) {
                this.text2().text(prm);
		this.text2().config(cnf);
                return;
            }
            return this.innerComp('text2',prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    button (prm) {
        try {
            if ('string' === typeof prm) {
                this.button().text(prm);
                return;
            }
            return this.innerComp('button',prm, Button);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    buttonSize (wid, hei) {
        try {
            this.button().size(wid, hei);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    start (prm) {
        try {
            return this.confmng('start', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
