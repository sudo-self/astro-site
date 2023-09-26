globalThis.process = {
	argv: [],
	env: Deno.env.toObject(),
};
// dist/server/entry.mjs
import { Server } from "https://deno.land/std@0.132.0/http/server.ts";
import { fetch as fetch$1 } from "https://deno.land/x/file_fetch/mod.ts";
function Mime$1() {
  this._types = /* @__PURE__ */ Object.create(null);
  this._extensions = /* @__PURE__ */ Object.create(null);
  for (let i2 = 0; i2 < arguments.length; i2++) {
    this.define(arguments[i2]);
  }
  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}
Mime$1.prototype.define = function(typeMap, force) {
  for (let type in typeMap) {
    let extensions = typeMap[type].map(function(t2) {
      return t2.toLowerCase();
    });
    type = type.toLowerCase();
    for (let i2 = 0; i2 < extensions.length; i2++) {
      const ext = extensions[i2];
      if (ext[0] === "*") {
        continue;
      }
      if (!force && ext in this._types) {
        throw new Error(
          'Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".'
        );
      }
      this._types[ext] = type;
    }
    if (force || !this._extensions[type]) {
      const ext = extensions[0];
      this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
    }
  }
};
Mime$1.prototype.getType = function(path) {
  path = String(path);
  let last = path.replace(/^.*[/\\]/, "").toLowerCase();
  let ext = last.replace(/^.*\./, "").toLowerCase();
  let hasPath = last.length < path.length;
  let hasDot = ext.length < last.length - 1;
  return (hasDot || !hasPath) && this._types[ext] || null;
};
Mime$1.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};
var Mime_1 = Mime$1;
var standard = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
var other = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
var Mime = Mime_1;
var mime = new Mime(standard, other);
var ASTRO_VERSION = "1.1.0";
function createDeprecatedFetchContentFn() {
  return () => {
    throw new Error("Deprecated: Astro.fetchContent() has been replaced with Astro.glob().");
  };
}
function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult, globValue) => {
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new Error(`Astro.glob(${JSON.stringify(globValue())}) - no matches found.`);
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(filePathname, _site, projectRootStr) {
  const site = _site ? new URL(_site) : void 0;
  const referenceURL = new URL(filePathname, `http://localhost`);
  const projectRoot = new URL(projectRootStr);
  return {
    site,
    generator: `Astro v${ASTRO_VERSION}`,
    fetchContent: createDeprecatedFetchContentFn(),
    glob: createAstroGlobFn(),
    resolve(...segments) {
      let resolved = segments.reduce((u2, segment) => new URL(segment, u2), referenceURL).pathname;
      if (resolved.startsWith(projectRoot.pathname)) {
        resolved = "/" + resolved.slice(projectRoot.pathname.length);
      }
      return resolved;
    }
  };
}
function getHandlerFromModule(mod, method) {
  if (mod[method]) {
    return mod[method];
  }
  if (method === "delete" && mod["del"]) {
    return mod["del"];
  }
  if (mod["all"]) {
    return mod["all"];
  }
  return void 0;
}
async function renderEndpoint(mod, request, params) {
  var _a2;
  const chosenMethod = (_a2 = request.method) == null ? void 0 : _a2.toLowerCase();
  const handler = getHandlerFromModule(mod, chosenMethod);
  if (!handler || typeof handler !== "function") {
    throw new Error(
      `Endpoint handler not found! Expected an exported function for "${chosenMethod}"`
    );
  }
  if (handler.length > 1) {
    console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);
  }
  const context = {
    request,
    params
  };
  const proxy = new Proxy(context, {
    get(target, prop) {
      if (prop in target) {
        return Reflect.get(target, prop);
      } else if (prop in params) {
        console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`);
        return Reflect.get(params, prop);
      } else {
        return void 0;
      }
    }
  });
  return handler.call(mod, proxy, request);
}
var { replace } = "";
var ca = /[&<>'"]/g;
var esca = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
};
var pe = (m2) => esca[m2];
var escape = (es) => replace.call(es, ca, pe);
var escapeHTML = escape;
var HTMLString = class extends String {
};
var markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};
var Metadata = class {
  constructor(filePathname, opts) {
    this.modules = opts.modules;
    this.hoisted = opts.hoisted;
    this.hydratedComponents = opts.hydratedComponents;
    this.clientOnlyComponents = opts.clientOnlyComponents;
    this.hydrationDirectives = opts.hydrationDirectives;
    this.mockURL = new URL(filePathname, "http://example.com");
    this.metadataCache = /* @__PURE__ */ new Map();
  }
  resolvePath(specifier) {
    if (specifier.startsWith(".")) {
      const resolved = new URL(specifier, this.mockURL).pathname;
      if (resolved.startsWith("/@fs") && resolved.endsWith(".jsx")) {
        return resolved.slice(0, resolved.length - 4);
      }
      return resolved;
    }
    return specifier;
  }
  getPath(Component) {
    const metadata = this.getComponentMetadata(Component);
    return (metadata == null ? void 0 : metadata.componentUrl) || null;
  }
  getExport(Component) {
    const metadata = this.getComponentMetadata(Component);
    return (metadata == null ? void 0 : metadata.componentExport) || null;
  }
  getComponentMetadata(Component) {
    if (this.metadataCache.has(Component)) {
      return this.metadataCache.get(Component);
    }
    const metadata = this.findComponentMetadata(Component);
    this.metadataCache.set(Component, metadata);
    return metadata;
  }
  findComponentMetadata(Component) {
    const isCustomElement = typeof Component === "string";
    for (const { module, specifier } of this.modules) {
      const id = this.resolvePath(specifier);
      for (const [key, value] of Object.entries(module)) {
        if (isCustomElement) {
          if (key === "tagName" && Component === value) {
            return {
              componentExport: key,
              componentUrl: id
            };
          }
        } else if (Component === value) {
          return {
            componentExport: key,
            componentUrl: id
          };
        }
      }
    }
    return null;
  }
};
function createMetadata(filePathname, options) {
  return new Metadata(filePathname, options);
}
var PROP_TYPE = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7
};
function serializeArray(value) {
  return value.map((v2) => convertToSerializedForm(v2));
}
function serializeObject(value) {
  return Object.fromEntries(
    Object.entries(value).map(([k2, v2]) => {
      return [k2, convertToSerializedForm(v2)];
    })
  );
}
function convertToSerializedForm(value) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [PROP_TYPE.Map, JSON.stringify(serializeArray(Array.from(value)))];
    }
    case "[object Set]": {
      return [PROP_TYPE.Set, JSON.stringify(serializeArray(Array.from(value)))];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(value))];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value)];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props) {
  return JSON.stringify(serializeObject(props));
}
function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
var HydrationDirectivesRaw = ["load", "idle", "media", "visible", "only"];
var HydrationDirectives = new Set(HydrationDirectivesRaw);
var HydrationDirectiveProps = new Set(HydrationDirectivesRaw.map((n2) => `client:${n2}`));
function extractDirectives(inputProps) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!HydrationDirectives.has(extracted.hydration.directive)) {
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${Array.from(
                HydrationDirectiveProps
              ).join(", ")}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new Error(
              'Error: Media query must be provided for "client:media", similar to client:media="(max-width: 600px)"'
            );
          }
          break;
        }
      }
    } else if (key === "class:list") {
      extracted.props[key.slice(0, -5)] = serializeListValue(value);
    } else {
      extracted.props[key] = value;
    }
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(
      `Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  }
  const island = {
    children: "",
    props: {
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = value;
    }
  }
  island.props["component-url"] = await result.resolve(componentUrl);
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(renderer.clientEntrypoint);
    island.props["props"] = escapeHTML(serializeProps(props));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  island.props["before-hydration-url"] = await result.resolve("astro:scripts/before-hydration.js");
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  return island;
}
var idle_prebuilt_default = `(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));`;
var load_prebuilt_default = `(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));`;
var media_prebuilt_default = `(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));`;
var only_prebuilt_default = `(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));`;
var visible_prebuilt_default = `(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));`;
var astro_island_prebuilt_default = `var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t)},o=(t,i)=>{if(t===""||!Array.isArray(i))return i;const[e,n]=i;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const i=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const s of n){const r=s.closest(this.tagName);!r||!r.isSameNode(this)||(e[s.getAttribute("data-astro-template")||"default"]=s.innerHTML,s.remove())}for(const s of i){const r=s.closest(this.tagName);!r||!r.isSameNode(this)||(e[s.getAttribute("name")||"default"]=s.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((i,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate),await import(this.getAttribute("before-hydration-url")),this.start()}start(){const i=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(\`astro:\${e}\`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:s}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),r=this.getAttribute("component-export")||"default";if(!r.includes("."))this.Component=a[r];else{this.Component=a;for(const d of r.split("."))this.Component=this.Component[d]}return this.hydrator=s,this.hydrate},i,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}`;
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
var hydrationScripts = {
  idle: idle_prebuilt_default,
  load: load_prebuilt_default,
  only: only_prebuilt_default,
  media: media_prebuilt_default,
  visible: visible_prebuilt_default
};
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(directive) {
  if (!(directive in hydrationScripts)) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  const directiveScriptText = hydrationScripts[directive];
  return directiveScriptText;
}
function getPrescripts(type, directive) {
  switch (type) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${getDirectiveScriptText(directive) + astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(directive)}<\/script>`;
  }
  return "";
}
var Fragment = Symbol.for("astro:fragment");
var Renderer = Symbol.for("astro:renderer");
function stringifyChunk(result, chunk) {
  switch (chunk.type) {
    case "directive": {
      const { hydration } = chunk;
      let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
      let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
      let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
      if (prescriptType) {
        let prescripts = getPrescripts(prescriptType, hydration.directive);
        return markHTMLString(prescripts);
      } else {
        return "";
      }
    }
    default: {
      return chunk.toString();
    }
  }
}
function validateComponentProps(props, displayName) {
  var _a2;
  if (((_a2 = Object.assign({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }, { _: process.env._ })) == null ? void 0 : _a2.DEV) && props != null) {
    for (const prop of Object.keys(props)) {
      if (HydrationDirectiveProps.has(prop)) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
var AstroComponent = class {
  constructor(htmlParts, expressions) {
    this.htmlParts = htmlParts;
    this.expressions = expressions;
  }
  get [Symbol.toStringTag]() {
    return "AstroComponent";
  }
  async *[Symbol.asyncIterator]() {
    const { htmlParts, expressions } = this;
    for (let i2 = 0; i2 < htmlParts.length; i2++) {
      const html = htmlParts[i2];
      const expression = expressions[i2];
      yield markHTMLString(html);
      yield* renderChild(expression);
    }
  }
};
function isAstroComponent(obj) {
  return typeof obj === "object" && Object.prototype.toString.call(obj) === "[object AstroComponent]";
}
function isAstroComponentFactory(obj) {
  return obj == null ? false : !!obj.isAstroComponentFactory;
}
async function* renderAstroComponent(component) {
  for await (const value of component) {
    if (value || value === 0) {
      for await (const chunk of renderChild(value)) {
        switch (chunk.type) {
          case "directive": {
            yield chunk;
            break;
          }
          default: {
            yield markHTMLString(chunk);
            break;
          }
        }
      }
    }
  }
}
async function renderToString(result, componentFactory, props, children) {
  const Component = await componentFactory(result, props, children);
  if (!isAstroComponent(Component)) {
    const response = Component;
    throw response;
  }
  let html = "";
  for await (const chunk of renderAstroComponent(Component)) {
    html += stringifyChunk(result, chunk);
  }
  return html;
}
async function renderToIterable(result, componentFactory, displayName, props, children) {
  validateComponentProps(props, displayName);
  const Component = await componentFactory(result, props, children);
  if (!isAstroComponent(Component)) {
    console.warn(
      `Returning a Response is only supported inside of page components. Consider refactoring this logic into something like a function that can be used in the page.`
    );
    const response = Component;
    throw response;
  }
  return renderAstroComponent(Component);
}
async function renderTemplate(htmlParts, ...expressions) {
  return new AstroComponent(htmlParts, expressions);
}
async function* renderChild(child) {
  child = await child;
  if (child instanceof HTMLString) {
    yield child;
  } else if (Array.isArray(child)) {
    for (const value of child) {
      yield markHTMLString(await renderChild(value));
    }
  } else if (typeof child === "function") {
    yield* renderChild(child());
  } else if (typeof child === "string") {
    yield markHTMLString(escapeHTML(child));
  } else if (!child && child !== 0)
    ;
  else if (child instanceof AstroComponent || Object.prototype.toString.call(child) === "[object AstroComponent]") {
    yield* renderAstroComponent(child);
  } else if (typeof child === "object" && Symbol.asyncIterator in child) {
    yield* child;
  } else {
    yield child;
  }
}
async function renderSlot(result, slotted, fallback) {
  if (slotted) {
    let iterator = renderChild(slotted);
    let content = "";
    for await (const chunk of iterator) {
      if (chunk.type === "directive") {
        content += stringifyChunk(result, chunk);
      } else {
        content += chunk;
      }
    }
    return markHTMLString(content);
  }
  return fallback;
}
var dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
var binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i2 = 0; i2 < str.length; i2++) {
    const ch = str.charCodeAt(i2);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}
var voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
var htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
var htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
var svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
var STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
var toIdent = (k2) => k2.trim().replace(/(?:(?<!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
var toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
var kebab = (k2) => k2.toLowerCase() === k2 ? k2 : k2.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
var toStyleString = (obj) => Object.entries(obj).map(([k2, v2]) => `${kebab(k2)}:${v2}`).join(";");
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `let ${toIdent(key)} = ${JSON.stringify(value)};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(serializeListValue(value));
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString) && typeof value === "object") {
    return markHTMLString(` ${key}="${toStyleString(value)}"`);
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement$1(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _2, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}
function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlot(result, slots == null ? void 0 : slots.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}
var rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(componentUrl) {
  const extname2 = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname2) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact"];
    default:
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/vue", "@astrojs/svelte"];
  }
}
function getComponentType(Component) {
  if (Component === Fragment) {
    return "fragment";
  }
  if (Component && typeof Component === "object" && Component["astro:html"]) {
    return "html";
  }
  if (isAstroComponentFactory(Component)) {
    return "astro-factory";
  }
  return "unknown";
}
async function renderComponent(result, displayName, Component, _props, slots = {}) {
  var _a2;
  Component = await Component;
  switch (getComponentType(Component)) {
    case "fragment": {
      const children2 = await renderSlot(result, slots == null ? void 0 : slots.default);
      if (children2 == null) {
        return children2;
      }
      return markHTMLString(children2);
    }
    case "html": {
      const children2 = {};
      if (slots) {
        await Promise.all(
          Object.entries(slots).map(
            ([key, value]) => renderSlot(result, value).then((output) => {
              children2[key] = output;
            })
          )
        );
      }
      const html2 = Component.render({ slots: children2 });
      return markHTMLString(html2);
    }
    case "astro-factory": {
      async function* renderAstroComponentInline() {
        let iterable = await renderToIterable(result, Component, displayName, _props, slots);
        yield* iterable;
      }
      return renderAstroComponentInline();
    }
  }
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers: renderers2 } = result._metadata;
  const metadata = { displayName };
  const { hydration, isPage, props } = extractDirectives(_props);
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  if (Array.isArray(renderers2) && renderers2.length === 0 && typeof Component !== "string" && !componentIsHTMLElement(Component)) {
    const message = `Unable to render ${metadata.displayName}!

There are no \`integrations\` set in your \`astro.config.mjs\` file.
Did you mean to add ${formatList(probableRendererNames.map((r2) => "`" + r2 + "`"))}?`;
    throw new Error(message);
  }
  const children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlot(result, value).then((output) => {
          children[key] = output;
        })
      )
    );
  }
  let renderer;
  if (metadata.hydrate !== "only") {
    if (Component && Component[Renderer]) {
      const rendererName = Component[Renderer];
      renderer = renderers2.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error2;
      for (const r2 of renderers2) {
        try {
          if (await r2.ssr.check.call({ result }, Component, props, children)) {
            renderer = r2;
            break;
          }
        } catch (e2) {
          error2 ?? (error2 = e2);
        }
      }
      if (!renderer && error2) {
        throw error2;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = renderHTMLElement(result, Component, _props, slots);
      return output;
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers2.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer && renderers2.length === 1) {
      renderer = renderers2[0];
    }
    if (!renderer) {
      const extname2 = (_a2 = metadata.componentUrl) == null ? void 0 : _a2.split(".").pop();
      renderer = renderers2.filter(
        ({ name }) => name === `@astrojs/${extname2}` || name === extname2
      )[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new Error(`Unable to render ${metadata.displayName}!

Using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.
Did you mean to pass <${metadata.displayName} client:only="${probableRendererNames.map((r2) => r2.replace("@astrojs/", "")).join("|")}" />
`);
    } else if (typeof Component !== "string") {
      const matchingRenderers = renderers2.filter((r2) => probableRendererNames.includes(r2.name));
      const plural = renderers2.length > 1;
      if (matchingRenderers.length === 0) {
        throw new Error(`Unable to render ${metadata.displayName}!

There ${plural ? "are" : "is"} ${renderers2.length} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render ${metadata.displayName}.

Did you mean to enable ${formatList(probableRendererNames.map((r2) => "`" + r2 + "`"))}?`);
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          props,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlot(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        props,
        children,
        metadata
      ));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new Error(
      `${metadata.displayName} component has a \`client:${metadata.hydrate}\` directive, but no client entrypoint was provided by ${renderer.name}!`
    );
  }
  if (!html && typeof Component === "string") {
    const childSlots = Object.values(children).join("");
    const iterable = renderAstroComponent(
      await renderTemplate`<${Component}${internalSpreadAttributes(props)}${markHTMLString(
        childSlots === "" && voidElementNames.test(Component) ? `/>` : `>${childSlots}</${Component}>`
      )}`
    );
    html = "";
    for await (const chunk of iterable) {
      html += chunk;
    }
  }
  if (!hydration) {
    if (isPage || (renderer == null ? void 0 : renderer.name) === "astro:jsx") {
      return html;
    }
    return markHTMLString(html.replace(/\<\/?astro-slot\>/g, ""));
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        if (!html.includes(key === "default" ? `<astro-slot>` : `<astro-slot name="${key}">`)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  async function* renderAll() {
    yield { type: "directive", hydration, result };
    yield markHTMLString(renderElement$1("astro-island", island, false));
  }
  return renderAll();
}
var uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i2) => JSON.stringify(i2.props) === props && i2.children == children);
};
var alreadyHeadRenderedResults = /* @__PURE__ */ new WeakSet();
function renderHead(result) {
  alreadyHeadRenderedResults.add(result);
  const styles = Array.from(result.styles).filter(uniqueElements).map((style) => renderElement$1("style", style));
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script, i2) => {
    return renderElement$1("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement$1("link", link, false));
  return markHTMLString(links.join("\n") + styles.join("\n") + scripts.join("\n"));
}
async function* maybeRenderHead(result) {
  if (alreadyHeadRenderedResults.has(result)) {
    return;
  }
  yield renderHead(result);
}
var __accessCheck$2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$2 = (obj, member, getter) => {
  __accessCheck$2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$2 = (obj, member, value, setter) => {
  __accessCheck$2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var isNodeJS = typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";
var StreamingCompatibleResponse;
function createResponseClass() {
  var _isStream, _body, _a2;
  StreamingCompatibleResponse = (_a2 = class extends Response {
    constructor(body, init2) {
      let isStream = body instanceof ReadableStream;
      super(isStream ? null : body, init2);
      __privateAdd$2(this, _isStream, void 0);
      __privateAdd$2(this, _body, void 0);
      __privateSet$2(this, _isStream, isStream);
      __privateSet$2(this, _body, body);
    }
    get body() {
      return __privateGet$2(this, _body);
    }
    async text() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let decoder = new TextDecoder();
        let body = __privateGet$2(this, _body);
        let out = "";
        for await (let chunk of body) {
          out += decoder.decode(chunk);
        }
        return out;
      }
      return super.text();
    }
    async arrayBuffer() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let body = __privateGet$2(this, _body);
        let chunks = [];
        let len = 0;
        for await (let chunk of body) {
          chunks.push(chunk);
          len += chunk.length;
        }
        let ab = new Uint8Array(len);
        let offset = 0;
        for (const chunk of chunks) {
          ab.set(chunk, offset);
          offset += chunk.length;
        }
        return ab;
      }
      return super.arrayBuffer();
    }
  }, _isStream = /* @__PURE__ */ new WeakMap(), _body = /* @__PURE__ */ new WeakMap(), _a2);
  return StreamingCompatibleResponse;
}
var createResponse = isNodeJS ? (body, init2) => {
  if (typeof body === "string") {
    return new Response(body, init2);
  }
  if (typeof StreamingCompatibleResponse === "undefined") {
    return new (createResponseClass())(body, init2);
  }
  return new StreamingCompatibleResponse(body, init2);
} : (body, init2) => new Response(body, init2);
var encoder = new TextEncoder();
var needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return needsHeadRenderingSymbol in pageComponent && !!pageComponent[needsHeadRenderingSymbol];
}
async function renderPage(result, componentFactory, props, children, streaming) {
  if (!isAstroComponentFactory(componentFactory)) {
    const pageProps = { ...props ?? {}, "server:root": true };
    const output = await renderComponent(
      result,
      componentFactory.name,
      componentFactory,
      pageProps,
      null
    );
    let html = output.toString();
    if (!/<!doctype html/i.test(html)) {
      let rest = html;
      html = `<!DOCTYPE html>`;
      if (nonAstroPageNeedsHeadInjection(componentFactory)) {
        for await (let chunk of maybeRenderHead(result)) {
          html += chunk;
        }
      }
      html += rest;
    }
    const bytes = encoder.encode(html);
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html; charset=utf-8"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  const factoryReturnValue = await componentFactory(result, props, children);
  if (isAstroComponent(factoryReturnValue)) {
    let iterable = renderAstroComponent(factoryReturnValue);
    let init2 = result.response;
    let headers = new Headers(init2.headers);
    let body;
    if (streaming) {
      body = new ReadableStream({
        start(controller) {
          async function read() {
            let i2 = 0;
            try {
              for await (const chunk of iterable) {
                let html = stringifyChunk(result, chunk);
                if (i2 === 0) {
                  if (!/<!doctype html/i.test(html)) {
                    controller.enqueue(encoder.encode("<!DOCTYPE html>\n"));
                  }
                }
                controller.enqueue(encoder.encode(html));
                i2++;
              }
              controller.close();
            } catch (e2) {
              controller.error(e2);
            }
          }
          read();
        }
      });
    } else {
      body = "";
      let i2 = 0;
      for await (const chunk of iterable) {
        let html = stringifyChunk(result, chunk);
        if (i2 === 0) {
          if (!/<!doctype html/i.test(html)) {
            body += "<!DOCTYPE html>\n";
          }
        }
        body += html;
        i2++;
      }
      const bytes = encoder.encode(body);
      headers.set("Content-Length", bytes.byteLength.toString());
    }
    let response = createResponse(body, { ...init2, headers });
    return response;
  } else {
    return factoryReturnValue;
  }
}
function createComponent(cb) {
  cb.isAstroComponentFactory = true;
  return cb;
}
function spreadAttributes(values, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $$1 = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x2, y2) {
  let rgx = new RegExp(`\\x1b\\[${y2}m`, "g");
  let open = `\x1B[${x2}m`, close = `\x1B[${y2}m`;
  return function(txt) {
    if (!$$1.enabled || txt == null)
      return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var red = init(31, 39);
var yellow = init(33, 39);
var cyan = init(36, 39);
var eastasianwidth = { exports: {} };
(function(module) {
  var eaw = {};
  {
    module.exports = eaw;
  }
  eaw.eastAsianWidth = function(character) {
    var x2 = character.charCodeAt(0);
    var y2 = character.length == 2 ? character.charCodeAt(1) : 0;
    var codePoint = x2;
    if (55296 <= x2 && x2 <= 56319 && (56320 <= y2 && y2 <= 57343)) {
      x2 &= 1023;
      y2 &= 1023;
      codePoint = x2 << 10 | y2;
      codePoint += 65536;
    }
    if (12288 == codePoint || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510) {
      return "F";
    }
    if (8361 == codePoint || 65377 <= codePoint && codePoint <= 65470 || 65474 <= codePoint && codePoint <= 65479 || 65482 <= codePoint && codePoint <= 65487 || 65490 <= codePoint && codePoint <= 65495 || 65498 <= codePoint && codePoint <= 65500 || 65512 <= codePoint && codePoint <= 65518) {
      return "H";
    }
    if (4352 <= codePoint && codePoint <= 4447 || 4515 <= codePoint && codePoint <= 4519 || 4602 <= codePoint && codePoint <= 4607 || 9001 <= codePoint && codePoint <= 9002 || 11904 <= codePoint && codePoint <= 11929 || 11931 <= codePoint && codePoint <= 12019 || 12032 <= codePoint && codePoint <= 12245 || 12272 <= codePoint && codePoint <= 12283 || 12289 <= codePoint && codePoint <= 12350 || 12353 <= codePoint && codePoint <= 12438 || 12441 <= codePoint && codePoint <= 12543 || 12549 <= codePoint && codePoint <= 12589 || 12593 <= codePoint && codePoint <= 12686 || 12688 <= codePoint && codePoint <= 12730 || 12736 <= codePoint && codePoint <= 12771 || 12784 <= codePoint && codePoint <= 12830 || 12832 <= codePoint && codePoint <= 12871 || 12880 <= codePoint && codePoint <= 13054 || 13056 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42124 || 42128 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 55216 <= codePoint && codePoint <= 55238 || 55243 <= codePoint && codePoint <= 55291 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65106 || 65108 <= codePoint && codePoint <= 65126 || 65128 <= codePoint && codePoint <= 65131 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127490 || 127504 <= codePoint && codePoint <= 127546 || 127552 <= codePoint && codePoint <= 127560 || 127568 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 194367 || 177984 <= codePoint && codePoint <= 196605 || 196608 <= codePoint && codePoint <= 262141) {
      return "W";
    }
    if (32 <= codePoint && codePoint <= 126 || 162 <= codePoint && codePoint <= 163 || 165 <= codePoint && codePoint <= 166 || 172 == codePoint || 175 == codePoint || 10214 <= codePoint && codePoint <= 10221 || 10629 <= codePoint && codePoint <= 10630) {
      return "Na";
    }
    if (161 == codePoint || 164 == codePoint || 167 <= codePoint && codePoint <= 168 || 170 == codePoint || 173 <= codePoint && codePoint <= 174 || 176 <= codePoint && codePoint <= 180 || 182 <= codePoint && codePoint <= 186 || 188 <= codePoint && codePoint <= 191 || 198 == codePoint || 208 == codePoint || 215 <= codePoint && codePoint <= 216 || 222 <= codePoint && codePoint <= 225 || 230 == codePoint || 232 <= codePoint && codePoint <= 234 || 236 <= codePoint && codePoint <= 237 || 240 == codePoint || 242 <= codePoint && codePoint <= 243 || 247 <= codePoint && codePoint <= 250 || 252 == codePoint || 254 == codePoint || 257 == codePoint || 273 == codePoint || 275 == codePoint || 283 == codePoint || 294 <= codePoint && codePoint <= 295 || 299 == codePoint || 305 <= codePoint && codePoint <= 307 || 312 == codePoint || 319 <= codePoint && codePoint <= 322 || 324 == codePoint || 328 <= codePoint && codePoint <= 331 || 333 == codePoint || 338 <= codePoint && codePoint <= 339 || 358 <= codePoint && codePoint <= 359 || 363 == codePoint || 462 == codePoint || 464 == codePoint || 466 == codePoint || 468 == codePoint || 470 == codePoint || 472 == codePoint || 474 == codePoint || 476 == codePoint || 593 == codePoint || 609 == codePoint || 708 == codePoint || 711 == codePoint || 713 <= codePoint && codePoint <= 715 || 717 == codePoint || 720 == codePoint || 728 <= codePoint && codePoint <= 731 || 733 == codePoint || 735 == codePoint || 768 <= codePoint && codePoint <= 879 || 913 <= codePoint && codePoint <= 929 || 931 <= codePoint && codePoint <= 937 || 945 <= codePoint && codePoint <= 961 || 963 <= codePoint && codePoint <= 969 || 1025 == codePoint || 1040 <= codePoint && codePoint <= 1103 || 1105 == codePoint || 8208 == codePoint || 8211 <= codePoint && codePoint <= 8214 || 8216 <= codePoint && codePoint <= 8217 || 8220 <= codePoint && codePoint <= 8221 || 8224 <= codePoint && codePoint <= 8226 || 8228 <= codePoint && codePoint <= 8231 || 8240 == codePoint || 8242 <= codePoint && codePoint <= 8243 || 8245 == codePoint || 8251 == codePoint || 8254 == codePoint || 8308 == codePoint || 8319 == codePoint || 8321 <= codePoint && codePoint <= 8324 || 8364 == codePoint || 8451 == codePoint || 8453 == codePoint || 8457 == codePoint || 8467 == codePoint || 8470 == codePoint || 8481 <= codePoint && codePoint <= 8482 || 8486 == codePoint || 8491 == codePoint || 8531 <= codePoint && codePoint <= 8532 || 8539 <= codePoint && codePoint <= 8542 || 8544 <= codePoint && codePoint <= 8555 || 8560 <= codePoint && codePoint <= 8569 || 8585 == codePoint || 8592 <= codePoint && codePoint <= 8601 || 8632 <= codePoint && codePoint <= 8633 || 8658 == codePoint || 8660 == codePoint || 8679 == codePoint || 8704 == codePoint || 8706 <= codePoint && codePoint <= 8707 || 8711 <= codePoint && codePoint <= 8712 || 8715 == codePoint || 8719 == codePoint || 8721 == codePoint || 8725 == codePoint || 8730 == codePoint || 8733 <= codePoint && codePoint <= 8736 || 8739 == codePoint || 8741 == codePoint || 8743 <= codePoint && codePoint <= 8748 || 8750 == codePoint || 8756 <= codePoint && codePoint <= 8759 || 8764 <= codePoint && codePoint <= 8765 || 8776 == codePoint || 8780 == codePoint || 8786 == codePoint || 8800 <= codePoint && codePoint <= 8801 || 8804 <= codePoint && codePoint <= 8807 || 8810 <= codePoint && codePoint <= 8811 || 8814 <= codePoint && codePoint <= 8815 || 8834 <= codePoint && codePoint <= 8835 || 8838 <= codePoint && codePoint <= 8839 || 8853 == codePoint || 8857 == codePoint || 8869 == codePoint || 8895 == codePoint || 8978 == codePoint || 9312 <= codePoint && codePoint <= 9449 || 9451 <= codePoint && codePoint <= 9547 || 9552 <= codePoint && codePoint <= 9587 || 9600 <= codePoint && codePoint <= 9615 || 9618 <= codePoint && codePoint <= 9621 || 9632 <= codePoint && codePoint <= 9633 || 9635 <= codePoint && codePoint <= 9641 || 9650 <= codePoint && codePoint <= 9651 || 9654 <= codePoint && codePoint <= 9655 || 9660 <= codePoint && codePoint <= 9661 || 9664 <= codePoint && codePoint <= 9665 || 9670 <= codePoint && codePoint <= 9672 || 9675 == codePoint || 9678 <= codePoint && codePoint <= 9681 || 9698 <= codePoint && codePoint <= 9701 || 9711 == codePoint || 9733 <= codePoint && codePoint <= 9734 || 9737 == codePoint || 9742 <= codePoint && codePoint <= 9743 || 9748 <= codePoint && codePoint <= 9749 || 9756 == codePoint || 9758 == codePoint || 9792 == codePoint || 9794 == codePoint || 9824 <= codePoint && codePoint <= 9825 || 9827 <= codePoint && codePoint <= 9829 || 9831 <= codePoint && codePoint <= 9834 || 9836 <= codePoint && codePoint <= 9837 || 9839 == codePoint || 9886 <= codePoint && codePoint <= 9887 || 9918 <= codePoint && codePoint <= 9919 || 9924 <= codePoint && codePoint <= 9933 || 9935 <= codePoint && codePoint <= 9953 || 9955 == codePoint || 9960 <= codePoint && codePoint <= 9983 || 10045 == codePoint || 10071 == codePoint || 10102 <= codePoint && codePoint <= 10111 || 11093 <= codePoint && codePoint <= 11097 || 12872 <= codePoint && codePoint <= 12879 || 57344 <= codePoint && codePoint <= 63743 || 65024 <= codePoint && codePoint <= 65039 || 65533 == codePoint || 127232 <= codePoint && codePoint <= 127242 || 127248 <= codePoint && codePoint <= 127277 || 127280 <= codePoint && codePoint <= 127337 || 127344 <= codePoint && codePoint <= 127386 || 917760 <= codePoint && codePoint <= 917999 || 983040 <= codePoint && codePoint <= 1048573 || 1048576 <= codePoint && codePoint <= 1114109) {
      return "A";
    }
    return "N";
  };
  eaw.characterLength = function(character) {
    var code = this.eastAsianWidth(character);
    if (code == "F" || code == "W" || code == "A") {
      return 2;
    } else {
      return 1;
    }
  };
  function stringToArray(string) {
    return string.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  }
  eaw.length = function(string) {
    var characters = stringToArray(string);
    var len = 0;
    for (var i2 = 0; i2 < characters.length; i2++) {
      len = len + this.characterLength(characters[i2]);
    }
    return len;
  };
  eaw.slice = function(text, start2, end) {
    textLen = eaw.length(text);
    start2 = start2 ? start2 : 0;
    end = end ? end : 1;
    if (start2 < 0) {
      start2 = textLen + start2;
    }
    if (end < 0) {
      end = textLen + end;
    }
    var result = "";
    var eawLen = 0;
    var chars = stringToArray(text);
    for (var i2 = 0; i2 < chars.length; i2++) {
      var char = chars[i2];
      var charLen = eaw.length(char);
      if (eawLen >= start2 - (charLen == 2 ? 1 : 0)) {
        if (eawLen + charLen <= end) {
          result += char;
        } else {
          break;
        }
      }
      eawLen += charLen;
    }
    return result;
  };
})(eastasianwidth);
var dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
var levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, type, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    type,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function warn(opts, type, message) {
  return log(opts, "warn", type, message);
}
function error(opts, type, message) {
  return log(opts, "error", type, message);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
if (typeof process !== "undefined") {
  if (process.argv.includes("--verbose"))
    ;
  else if (process.argv.includes("--silent"))
    ;
  else
    ;
}
var VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([key, value]) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new Error(
      `[getStaticPaths] invalid route parameter for "${key}". Expected a string or number, received \`${value}\` ("${typeof value}")`
    );
  }
}
function validateDynamicRouteModule(mod, {
  ssr,
  logging
}) {
  if (mod.createCollection) {
    throw new Error(`[createCollection] deprecated. Please use getStaticPaths() instead.`);
  }
  if (ssr && mod.getStaticPaths) {
    warn(logging, "getStaticPaths", 'getStaticPaths() is ignored when "output: server" is set.');
  }
  if (!ssr && !mod.getStaticPaths) {
    throw new Error(
      `[getStaticPaths] getStaticPaths() function is required.
Make sure that you \`export\` a \`getStaticPaths\` function from your dynamic route.
Alternatively, set \`output: "server"\` in your Astro config file to switch to a non-static server build. `
    );
  }
}
function validateGetStaticPathsResult(result, logging) {
  if (!Array.isArray(result)) {
    throw new Error(
      `[getStaticPaths] invalid return value. Expected an array of path objects, but got \`${JSON.stringify(
        result
      )}\`.`
    );
  }
  result.forEach((pathObject) => {
    if (!pathObject.params) {
      warn(
        logging,
        "getStaticPaths",
        `invalid path object. Expected an object with key \`params\`, but got \`${JSON.stringify(
          pathObject
        )}\`. Skipped.`
      );
      return;
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string")) {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. A string value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (val === "") {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}
function getParams(array) {
  const fn = (match) => {
    const params = {};
    array.forEach((key, i2) => {
      if (key.startsWith("...")) {
        params[key.slice(3)] = match[i2 + 1] ? decodeURIComponent(match[i2 + 1]) : void 0;
      } else {
        params[key] = decodeURIComponent(match[i2 + 1]);
      }
    });
    return params;
  };
  return fn;
}
function stringifyParams(params) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next);
    const [key, value] = next;
    acc[key] = `${value}`;
    return acc;
  }, {});
  return JSON.stringify(validatedParams, Object.keys(params).sort());
}
var SCRIPT_EXTENSIONS = /* @__PURE__ */ new Set([".js", ".ts"]);
var scriptRe = new RegExp(
  `\\.(${Array.from(SCRIPT_EXTENSIONS).map((s2) => s2.slice(1)).join("|")})($|\\?)`
);
var isScriptRequest = (request) => scriptRe.test(request);
var STYLE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".css",
  ".pcss",
  ".postcss",
  ".scss",
  ".sass",
  ".styl",
  ".stylus",
  ".less"
]);
var cssRe = new RegExp(
  `\\.(${Array.from(STYLE_EXTENSIONS).map((s2) => s2.slice(1)).join("|")})($|\\?)`
);
var isCSSRequest = (request) => cssRe.test(request);
var __accessCheck$1 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$1 = (obj, member, getter) => {
  __accessCheck$1(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$1 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$1 = (obj, member, value, setter) => {
  __accessCheck$1(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _cache;
var _result;
var _slots;
var _loggingOpts;
var clientAddressSymbol = Symbol.for("astro.clientAddress");
function onlyAvailableInSSR(name) {
  return function _onlyAvailableInSSR() {
    throw new Error(`Oops, you are trying to use ${name}, which is only available with SSR.`);
  };
}
function getFunctionExpression(slot) {
  var _a2;
  if (!slot)
    return;
  if (((_a2 = slot.expressions) == null ? void 0 : _a2.length) !== 1)
    return;
  return slot.expressions[0];
}
var Slots = class {
  constructor(result, slots, logging) {
    __privateAdd$1(this, _cache, /* @__PURE__ */ new Map());
    __privateAdd$1(this, _result, void 0);
    __privateAdd$1(this, _slots, void 0);
    __privateAdd$1(this, _loggingOpts, void 0);
    __privateSet$1(this, _result, result);
    __privateSet$1(this, _slots, slots);
    __privateSet$1(this, _loggingOpts, logging);
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new Error(
            `Unable to create a slot named "${key}". "${key}" is a reserved slot name!
Please update the name of this slot.`
          );
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!__privateGet$1(this, _slots))
      return false;
    return Boolean(__privateGet$1(this, _slots)[name]);
  }
  async render(name, args = []) {
    const cacheable = args.length === 0;
    if (!__privateGet$1(this, _slots))
      return void 0;
    if (cacheable && __privateGet$1(this, _cache).has(name)) {
      const result = __privateGet$1(this, _cache).get(name);
      return result;
    }
    if (!this.has(name))
      return void 0;
    if (!cacheable) {
      const component = await __privateGet$1(this, _slots)[name]();
      const expression = getFunctionExpression(component);
      if (!Array.isArray(args)) {
        warn(
          __privateGet$1(this, _loggingOpts),
          "Astro.slots.render",
          `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
        );
      } else {
        if (expression) {
          const slot = expression(...args);
          return await renderSlot(__privateGet$1(this, _result), slot).then(
            (res) => res != null ? String(res) : res
          );
        }
      }
    }
    const content = await renderSlot(__privateGet$1(this, _result), __privateGet$1(this, _slots)[name]).then(
      (res) => res != null ? String(res) : res
    );
    if (cacheable)
      __privateGet$1(this, _cache).set(name, content);
    return content;
  }
};
_cache = /* @__PURE__ */ new WeakMap();
_result = /* @__PURE__ */ new WeakMap();
_slots = /* @__PURE__ */ new WeakMap();
_loggingOpts = /* @__PURE__ */ new WeakMap();
var renderMarkdown = null;
function createResult(args) {
  const { markdown, params, pathname, props: pageProps, renderers: renderers2, request, resolve: resolve2 } = args;
  const url = new URL(request.url);
  const headers = new Headers();
  if (args.streaming) {
    headers.set("Transfer-Encoding", "chunked");
    headers.set("Content-Type", "text/html");
  } else {
    headers.set("Content-Type", "text/html");
  }
  const response = {
    status: args.status,
    statusText: "OK",
    headers
  };
  Object.defineProperty(response, "headers", {
    value: response.headers,
    enumerable: true,
    writable: false
  });
  const result = {
    styles: args.styles ?? /* @__PURE__ */ new Set(),
    scripts: args.scripts ?? /* @__PURE__ */ new Set(),
    links: args.links ?? /* @__PURE__ */ new Set(),
    createAstro(astroGlobal, props, slots) {
      const astroSlots = new Slots(result, slots, args.logging);
      const Astro = {
        __proto__: astroGlobal,
        get clientAddress() {
          if (!(clientAddressSymbol in request)) {
            if (args.adapterName) {
              throw new Error(
                `Astro.clientAddress is not available in the ${args.adapterName} adapter. File an issue with the adapter to add support.`
              );
            } else {
              throw new Error(
                `Astro.clientAddress is not available in your environment. Ensure that you are using an SSR adapter that supports this feature.`
              );
            }
          }
          return Reflect.get(request, clientAddressSymbol);
        },
        params,
        props,
        request,
        url,
        redirect: args.ssr ? (path) => {
          return new Response(null, {
            status: 302,
            headers: {
              Location: path
            }
          });
        } : onlyAvailableInSSR("Astro.redirect"),
        resolve(path) {
          let extra = `This can be replaced with a dynamic import like so: await import("${path}")`;
          if (isCSSRequest(path)) {
            extra = `It looks like you are resolving styles. If you are adding a link tag, replace with this:
---
import "${path}";
---
`;
          } else if (isScriptRequest(path)) {
            extra = `It looks like you are resolving scripts. If you are adding a script tag, replace with this:

<script type="module" src={(await import("${path}?url")).default}><\/script>

or consider make it a module like so:

<script>
	import MyModule from "${path}";
<\/script>
`;
          }
          warn(
            args.logging,
            `deprecation`,
            `${bold(
              "Astro.resolve()"
            )} is deprecated. We see that you are trying to resolve ${path}.
${extra}`
          );
          return "";
        },
        response,
        slots: astroSlots
      };
      Object.defineProperty(Astro, "canonicalURL", {
        get: function() {
          warn(
            args.logging,
            "deprecation",
            `${bold("Astro.canonicalURL")} is deprecated! Use \`Astro.url\` instead.
Example:

---
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---
`
          );
          return new URL(this.request.url.pathname, this.site);
        }
      });
      Object.defineProperty(Astro, "__renderMarkdown", {
        enumerable: false,
        writable: false,
        value: async function(content, opts) {
          if (typeof Deno !== "undefined") {
            throw new Error("Markdown is not supported in Deno SSR");
          }
          if (!renderMarkdown) {
            let astroRemark = "@astrojs/";
            astroRemark += "markdown-remark";
            renderMarkdown = (await import(astroRemark)).renderMarkdown;
          }
          const { code } = await renderMarkdown(content, { ...markdown, ...opts ?? {} });
          return code;
        }
      });
      return Astro;
    },
    resolve: resolve2,
    _metadata: {
      renderers: renderers2,
      pathname,
      hasHydrationScript: false,
      hasDirectives: /* @__PURE__ */ new Set()
    },
    response
  };
  return result;
}
function generatePaginateFunction(routeMatch) {
  return function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new Error(
        `[paginate()] page number param \`${paramName}\` not found in your filepath.
Rename your file to \`[...page].astro\` or customize the param name via the \`paginate([], {param: '...'}\` option.`
      );
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start2 = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start2 + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start2, end),
            start: start2,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: {
              current: routeMatch.generate({ ...params }),
              next: pageNum === lastPage ? void 0 : routeMatch.generate({ ...params, page: String(pageNum + 1) }),
              prev: pageNum === 1 ? void 0 : routeMatch.generate({
                ...params,
                page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
              })
            }
          }
        }
      };
    });
    return result;
  };
}
async function callGetStaticPaths({
  isValidate,
  logging,
  mod,
  route,
  ssr
}) {
  validateDynamicRouteModule(mod, { ssr, logging });
  if (ssr) {
    return { staticPaths: Object.assign([], { keyed: /* @__PURE__ */ new Map() }) };
  }
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  let staticPaths = [];
  staticPaths = (await mod.getStaticPaths({
    paginate: generatePaginateFunction(route),
    rss() {
      throw new Error(
        "The RSS helper has been removed from getStaticPaths! Try the new @astrojs/rss package instead. See https://docs.astro.build/en/guides/rss/"
      );
    }
  })).flat();
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  if (isValidate) {
    validateGetStaticPathsResult(keyedStaticPaths, logging);
  }
  return {
    staticPaths: keyedStaticPaths
  };
}
var RouteCache = class {
  constructor(logging) {
    this.cache = {};
    this.logging = logging;
  }
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    if (this.cache[route.component]) {
      warn(
        this.logging,
        "routeCache",
        `Internal Warning: route cache overwritten. (${route.component})`
      );
    }
    this.cache[route.component] = entry;
  }
  get(route) {
    return this.cache[route.component];
  }
};
function findPathItemByKey(staticPaths, params) {
  const paramsKey = stringifyParams(params);
  let matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  debug("findPathItemByKey", `Unexpected cache miss looking for ${paramsKey}`);
  matchedStaticPath = staticPaths.find(
    ({ params: _params }) => JSON.stringify(_params) === paramsKey
  );
}
var GetParamsAndPropsError = /* @__PURE__ */ ((GetParamsAndPropsError2) => {
  GetParamsAndPropsError2[GetParamsAndPropsError2["NoMatchingStaticPath"] = 0] = "NoMatchingStaticPath";
  return GetParamsAndPropsError2;
})(GetParamsAndPropsError || {});
async function getParamsAndProps(opts) {
  const { logging, mod, route, routeCache, pathname, ssr } = opts;
  let params = {};
  let pageProps;
  if (route && !route.pathname) {
    if (route.params.length) {
      const paramsMatch = route.pattern.exec(pathname);
      if (paramsMatch) {
        params = getParams(route.params)(paramsMatch);
      }
    }
    let routeCacheEntry = routeCache.get(route);
    if (!routeCacheEntry) {
      routeCacheEntry = await callGetStaticPaths({ mod, route, isValidate: true, logging, ssr });
      routeCache.set(route, routeCacheEntry);
    }
    const matchedStaticPath = findPathItemByKey(routeCacheEntry.staticPaths, params);
    if (!matchedStaticPath && !ssr) {
      return 0;
    }
    pageProps = (matchedStaticPath == null ? void 0 : matchedStaticPath.props) ? { ...matchedStaticPath.props } : {};
  } else {
    pageProps = {};
  }
  return [params, pageProps];
}
async function render(opts) {
  const {
    adapterName,
    links,
    styles,
    logging,
    origin,
    markdown,
    mod,
    mode,
    pathname,
    scripts,
    renderers: renderers2,
    request,
    resolve: resolve2,
    route,
    routeCache,
    site,
    ssr,
    streaming,
    status = 200
  } = opts;
  const paramsAndPropsRes = await getParamsAndProps({
    logging,
    mod,
    route,
    routeCache,
    pathname,
    ssr
  });
  if (paramsAndPropsRes === 0) {
    throw new Error(
      `[getStaticPath] route pattern matched, but no matching static path found. (${pathname})`
    );
  }
  const [params, pageProps] = paramsAndPropsRes;
  const Component = await mod.default;
  if (!Component)
    throw new Error(`Expected an exported Astro component but received typeof ${typeof Component}`);
  const result = createResult({
    adapterName,
    links,
    styles,
    logging,
    markdown,
    mode,
    origin,
    params,
    props: pageProps,
    pathname,
    resolve: resolve2,
    renderers: renderers2,
    request,
    site,
    scripts,
    ssr,
    streaming,
    status
  });
  if (typeof mod.components === "object") {
    Object.assign(pageProps, { components: mod.components });
  }
  if (typeof mod.default === "function" && mod.default.name.startsWith("MDX")) {
    Object.assign(pageProps, {
      components: Object.assign((pageProps == null ? void 0 : pageProps.components) ?? {}, { Fragment })
    });
  }
  return await renderPage(result, Component, pageProps, null, streaming);
}
async function call(mod, opts) {
  const paramsAndPropsResp = await getParamsAndProps({ ...opts, mod });
  if (paramsAndPropsResp === GetParamsAndPropsError.NoMatchingStaticPath) {
    throw new Error(
      `[getStaticPath] route pattern matched, but no matching static path found. (${opts.pathname})`
    );
  }
  const [params] = paramsAndPropsResp;
  const response = await renderEndpoint(mod, opts.request, params);
  if (response instanceof Response) {
    return {
      type: "response",
      response
    };
  }
  return {
    type: "simple",
    body: response.body
  };
}
var lastMessage;
var lastMessageCount = 1;
var consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    function getPrefix() {
      let prefix = "";
      let type = event.type;
      if (type) {
        prefix += dim(dateTimeFormat.format(new Date()) + " ");
        if (event.level === "info") {
          type = bold(cyan(`[${type}]`));
        } else if (event.level === "warn") {
          type = bold(yellow(`[${type}]`));
        } else if (event.level === "error") {
          type = bold(red(`[${type}]`));
        }
        prefix += `${type} `;
      }
      return reset(prefix);
    }
    let message = event.message;
    if (message === lastMessage) {
      lastMessageCount++;
      message = `${message} ${yellow(`(x${lastMessageCount})`)}`;
    } else {
      lastMessage = message;
      lastMessageCount = 1;
    }
    const outMessage = getPrefix() + message;
    dest(outMessage);
    return true;
  }
};
function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map(trimSlashes).join("/");
}
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
  }
}
function normalizeStringPosix(path, allowAboveRoot) {
  var res = "";
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i2 = 0; i2 <= path.length; ++i2) {
    if (i2 < path.length)
      code = path.charCodeAt(i2);
    else if (code === 47)
      break;
    else
      code = 47;
    if (code === 47) {
      if (lastSlash === i2 - 1 || dots === 1)
        ;
      else if (lastSlash !== i2 - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = "";
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
              }
              lastSlash = i2;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += "/..";
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += "/" + path.slice(lastSlash + 1, i2);
        else
          res = path.slice(lastSlash + 1, i2);
        lastSegmentLength = i2 - lastSlash - 1;
      }
      lastSlash = i2;
      dots = 0;
    } else if (code === 46 && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}
var posix = {
  resolve: function resolve() {
    var resolvedPath = "";
    var resolvedAbsolute = false;
    var cwd;
    for (var i2 = arguments.length - 1; i2 >= -1 && !resolvedAbsolute; i2--) {
      var path;
      if (i2 >= 0)
        path = arguments[i2];
      else {
        if (cwd === void 0)
          cwd = process.cwd();
        path = cwd;
      }
      assertPath(path);
      if (path.length === 0) {
        continue;
      }
      resolvedPath = path + "/" + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47;
    }
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return "/" + resolvedPath;
      else
        return "/";
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return ".";
    }
  },
  normalize: function normalize(path) {
    assertPath(path);
    if (path.length === 0)
      return ".";
    var isAbsolute2 = path.charCodeAt(0) === 47;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
    path = normalizeStringPosix(path, !isAbsolute2);
    if (path.length === 0 && !isAbsolute2)
      path = ".";
    if (path.length > 0 && trailingSeparator)
      path += "/";
    if (isAbsolute2)
      return "/" + path;
    return path;
  },
  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47;
  },
  join: function join() {
    if (arguments.length === 0)
      return ".";
    var joined;
    for (var i2 = 0; i2 < arguments.length; ++i2) {
      var arg = arguments[i2];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === void 0)
          joined = arg;
        else
          joined += "/" + arg;
      }
    }
    if (joined === void 0)
      return ".";
    return posix.normalize(joined);
  },
  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);
    if (from === to)
      return "";
    from = posix.resolve(from);
    to = posix.resolve(to);
    if (from === to)
      return "";
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i2 = 0;
    for (; i2 <= length; ++i2) {
      if (i2 === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i2) === 47) {
            return to.slice(toStart + i2 + 1);
          } else if (i2 === 0) {
            return to.slice(toStart + i2);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i2) === 47) {
            lastCommonSep = i2;
          } else if (i2 === 0) {
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i2);
      var toCode = to.charCodeAt(toStart + i2);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47)
        lastCommonSep = i2;
    }
    var out = "";
    for (i2 = fromStart + lastCommonSep + 1; i2 <= fromEnd; ++i2) {
      if (i2 === fromEnd || from.charCodeAt(i2) === 47) {
        if (out.length === 0)
          out += "..";
        else
          out += "/..";
      }
    }
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47)
        ++toStart;
      return to.slice(toStart);
    }
  },
  _makeLong: function _makeLong(path) {
    return path;
  },
  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0)
      return ".";
    var code = path.charCodeAt(0);
    var hasRoot = code === 47;
    var end = -1;
    var matchedSlash = true;
    for (var i2 = path.length - 1; i2 >= 1; --i2) {
      code = path.charCodeAt(i2);
      if (code === 47) {
        if (!matchedSlash) {
          end = i2;
          break;
        }
      } else {
        matchedSlash = false;
      }
    }
    if (end === -1)
      return hasRoot ? "/" : ".";
    if (hasRoot && end === 1)
      return "//";
    return path.slice(0, end);
  },
  basename: function basename(path, ext) {
    if (ext !== void 0 && typeof ext !== "string")
      throw new TypeError('"ext" argument must be a string');
    assertPath(path);
    var start2 = 0;
    var end = -1;
    var matchedSlash = true;
    var i2;
    if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path)
        return "";
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i2 = path.length - 1; i2 >= 0; --i2) {
        var code = path.charCodeAt(i2);
        if (code === 47) {
          if (!matchedSlash) {
            start2 = i2 + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            matchedSlash = false;
            firstNonSlashEnd = i2 + 1;
          }
          if (extIdx >= 0) {
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                end = i2;
              }
            } else {
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start2 === end)
        end = firstNonSlashEnd;
      else if (end === -1)
        end = path.length;
      return path.slice(start2, end);
    } else {
      for (i2 = path.length - 1; i2 >= 0; --i2) {
        if (path.charCodeAt(i2) === 47) {
          if (!matchedSlash) {
            start2 = i2 + 1;
            break;
          }
        } else if (end === -1) {
          matchedSlash = false;
          end = i2 + 1;
        }
      }
      if (end === -1)
        return "";
      return path.slice(start2, end);
    }
  },
  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var preDotState = 0;
    for (var i2 = path.length - 1; i2 >= 0; --i2) {
      var code = path.charCodeAt(i2);
      if (code === 47) {
        if (!matchedSlash) {
          startPart = i2 + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i2 + 1;
      }
      if (code === 46) {
        if (startDot === -1)
          startDot = i2;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return "";
    }
    return path.slice(startDot, end);
  },
  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format("/", pathObject);
  },
  parse: function parse(path) {
    assertPath(path);
    var ret = { root: "", dir: "", base: "", ext: "", name: "" };
    if (path.length === 0)
      return ret;
    var code = path.charCodeAt(0);
    var isAbsolute2 = code === 47;
    var start2;
    if (isAbsolute2) {
      ret.root = "/";
      start2 = 1;
    } else {
      start2 = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i2 = path.length - 1;
    var preDotState = 0;
    for (; i2 >= start2; --i2) {
      code = path.charCodeAt(i2);
      if (code === 47) {
        if (!matchedSlash) {
          startPart = i2 + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i2 + 1;
      }
      if (code === 46) {
        if (startDot === -1)
          startDot = i2;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute2)
          ret.base = ret.name = path.slice(1, end);
        else
          ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute2) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }
    if (startPart > 0)
      ret.dir = path.slice(0, startPart - 1);
    else if (isAbsolute2)
      ret.dir = "/";
    return ret;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
posix.posix = posix;
var pathBrowserify = posix;
function getRootPath(site) {
  return appendForwardSlash(new URL(site || "http://localhost/").pathname);
}
function joinToRoot(href, site) {
  return pathBrowserify.posix.join(getRootPath(site), href);
}
function createLinkStylesheetElement(href, site) {
  return {
    props: {
      rel: "stylesheet",
      href: joinToRoot(href, site)
    },
    children: ""
  };
}
function createLinkStylesheetElementSet(hrefs, site) {
  return new Set(hrefs.map((href) => createLinkStylesheetElement(href, site)));
}
function createModuleScriptElement(script, site) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, site);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, site) {
  return {
    props: {
      type: "module",
      src: joinToRoot(src, site)
    },
    children: ""
  };
}
function matchRoute(pathname, manifest) {
  return manifest.routes.find((route) => route.pattern.test(pathname));
}
function lexer(str) {
  var tokens = [];
  var i2 = 0;
  while (i2 < str.length) {
    var char = str[i2];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i2, value: str[i2++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i2++, value: str[i2++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i2, value: str[i2++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i2, value: str[i2++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j2 = i2 + 1;
      while (j2 < str.length) {
        var code = str.charCodeAt(j2);
        if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
          name += str[j2++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i2));
      tokens.push({ type: "NAME", index: i2, value: name });
      i2 = j2;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j2 = i2 + 1;
      if (str[j2] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j2));
      }
      while (j2 < str.length) {
        if (str[j2] === "\\") {
          pattern += str[j2++] + str[j2++];
          continue;
        }
        if (str[j2] === ")") {
          count--;
          if (count === 0) {
            j2++;
            break;
          }
        } else if (str[j2] === "(") {
          count++;
          if (str[j2 + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j2));
          }
        }
        pattern += str[j2++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i2));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i2));
      tokens.push({ type: "PATTERN", index: i2, value: pattern });
      i2 = j2;
      continue;
    }
    tokens.push({ type: "CHAR", index: i2, value: str[i2++] });
  }
  tokens.push({ type: "END", index: i2, value: "" });
  return tokens;
}
function parse2(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a2 = options.prefixes, prefixes = _a2 === void 0 ? "./" : _a2;
  var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
  var result = [];
  var key = 0;
  var i2 = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i2 < tokens.length && tokens[i2].type === type)
      return tokens[i2++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a3 = tokens[i2], nextType = _a3.type, index = _a3.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  while (i2 < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse2(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a2 = options.encode, encode = _a2 === void 0 ? function(x2) {
    return x2;
  } : _a2, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path = "";
    for (var i2 = 0; i2 < tokens.length; i2++) {
      var token = tokens[i2];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j2 = 0; j2 < value.length; j2++) {
          var segment = encode(value[j2], token);
          if (validate && !matches[i2].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);
        if (validate && !matches[i2].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return segment[0].spread ? `/:${segment[0].content.slice(3)}(.*)?` : "/" + segment.map((part) => {
      if (part)
        return part.dynamic ? `:${part.content}` : part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments
  };
}
function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  return {
    ...serializedManifest,
    assets,
    routes
  };
}
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _manifest$1;
var _manifestData;
var _routeDataToRouteInfo;
var _routeCache;
var _encoder;
var _logging;
var _streaming;
var _renderPage;
var renderPage_fn;
var _callEndpoint;
var callEndpoint_fn;
var App = class {
  constructor(manifest, streaming = true) {
    __privateAdd(this, _renderPage);
    __privateAdd(this, _callEndpoint);
    __privateAdd(this, _manifest$1, void 0);
    __privateAdd(this, _manifestData, void 0);
    __privateAdd(this, _routeDataToRouteInfo, void 0);
    __privateAdd(this, _routeCache, void 0);
    __privateAdd(this, _encoder, new TextEncoder());
    __privateAdd(this, _logging, {
      dest: consoleLogDestination,
      level: "info"
    });
    __privateAdd(this, _streaming, void 0);
    __privateSet(this, _manifest$1, manifest);
    __privateSet(this, _manifestData, {
      routes: manifest.routes.map((route) => route.routeData)
    });
    __privateSet(this, _routeDataToRouteInfo, new Map(manifest.routes.map((route) => [route.routeData, route])));
    __privateSet(this, _routeCache, new RouteCache(__privateGet(this, _logging)));
    __privateSet(this, _streaming, streaming);
  }
  match(request, { matchNotFound = false } = {}) {
    const url = new URL(request.url);
    if (__privateGet(this, _manifest$1).assets.has(url.pathname)) {
      return void 0;
    }
    let routeData = matchRoute(url.pathname, __privateGet(this, _manifestData));
    if (routeData) {
      return routeData;
    } else if (matchNotFound) {
      return matchRoute("/404", __privateGet(this, _manifestData));
    } else {
      return void 0;
    }
  }
  async render(request, routeData) {
    let defaultStatus = 200;
    if (!routeData) {
      routeData = this.match(request);
      if (!routeData) {
        defaultStatus = 404;
        routeData = this.match(request, { matchNotFound: true });
      }
      if (!routeData) {
        return new Response(null, {
          status: 404,
          statusText: "Not found"
        });
      }
    }
    if (routeData.route === "/404") {
      defaultStatus = 404;
    }
    let mod = __privateGet(this, _manifest$1).pageMap.get(routeData.component);
    if (routeData.type === "page") {
      let response = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, routeData, mod, defaultStatus);
      if (response.status === 500) {
        const fiveHundredRouteData = matchRoute("/500", __privateGet(this, _manifestData));
        if (fiveHundredRouteData) {
          mod = __privateGet(this, _manifest$1).pageMap.get(fiveHundredRouteData.component);
          try {
            let fiveHundredResponse = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, fiveHundredRouteData, mod, 500);
            return fiveHundredResponse;
          } catch {
          }
        }
      }
      return response;
    } else if (routeData.type === "endpoint") {
      return __privateMethod(this, _callEndpoint, callEndpoint_fn).call(this, request, routeData, mod, defaultStatus);
    } else {
      throw new Error(`Unsupported route type [${routeData.type}].`);
    }
  }
};
_manifest$1 = /* @__PURE__ */ new WeakMap();
_manifestData = /* @__PURE__ */ new WeakMap();
_routeDataToRouteInfo = /* @__PURE__ */ new WeakMap();
_routeCache = /* @__PURE__ */ new WeakMap();
_encoder = /* @__PURE__ */ new WeakMap();
_logging = /* @__PURE__ */ new WeakMap();
_streaming = /* @__PURE__ */ new WeakMap();
_renderPage = /* @__PURE__ */ new WeakSet();
renderPage_fn = async function(request, routeData, mod, status = 200) {
  const url = new URL(request.url);
  const manifest = __privateGet(this, _manifest$1);
  const renderers2 = manifest.renderers;
  const info = __privateGet(this, _routeDataToRouteInfo).get(routeData);
  const links = createLinkStylesheetElementSet(info.links, manifest.site);
  let scripts = /* @__PURE__ */ new Set();
  for (const script of info.scripts) {
    if ("stage" in script) {
      if (script.stage === "head-inline") {
        scripts.add({
          props: {},
          children: script.children
        });
      }
    } else {
      scripts.add(createModuleScriptElement(script, manifest.site));
    }
  }
  try {
    const response = await render({
      adapterName: manifest.adapterName,
      links,
      logging: __privateGet(this, _logging),
      markdown: manifest.markdown,
      mod,
      mode: "production",
      origin: url.origin,
      pathname: url.pathname,
      scripts,
      renderers: renderers2,
      async resolve(specifier) {
        if (!(specifier in manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = manifest.entryModules[specifier];
        return bundlePath.startsWith("data:") ? bundlePath : prependForwardSlash(joinPaths(manifest.base, bundlePath));
      },
      route: routeData,
      routeCache: __privateGet(this, _routeCache),
      site: __privateGet(this, _manifest$1).site,
      ssr: true,
      request,
      streaming: __privateGet(this, _streaming),
      status
    });
    return response;
  } catch (err) {
    error(__privateGet(this, _logging), "ssr", err.stack || err.message || String(err));
    return new Response(null, {
      status: 500,
      statusText: "Internal server error"
    });
  }
};
_callEndpoint = /* @__PURE__ */ new WeakSet();
callEndpoint_fn = async function(request, routeData, mod, status = 200) {
  const url = new URL(request.url);
  const handler = mod;
  const result = await call(handler, {
    logging: __privateGet(this, _logging),
    origin: url.origin,
    pathname: url.pathname,
    request,
    route: routeData,
    routeCache: __privateGet(this, _routeCache),
    ssr: true,
    status
  });
  if (result.type === "response") {
    return result.response;
  } else {
    const body = result.body;
    const headers = new Headers();
    const mimeType = mime.getType(url.pathname);
    if (mimeType) {
      headers.set("Content-Type", `${mimeType};charset=utf-8`);
    } else {
      headers.set("Content-Type", "text/plain;charset=utf-8");
    }
    const bytes = __privateGet(this, _encoder).encode(body);
    headers.set("Content-Length", bytes.byteLength.toString());
    return new Response(bytes, {
      status: 200,
      headers
    });
  }
};
var _server = void 0;
var _startPromise = void 0;
function start$1(manifest, options) {
  if (options.start === false) {
    return;
  }
  const clientRoot = new URL("../client/", import.meta.url);
  const app = new App(manifest);
  const handler = async (request, connInfo) => {
    var _a2;
    if (app.match(request)) {
      let ip = (_a2 = connInfo == null ? void 0 : connInfo.remoteAddr) == null ? void 0 : _a2.hostname;
      Reflect.set(request, Symbol.for("astro.clientAddress"), ip);
      return await app.render(request);
    }
    const url = new URL(request.url);
    const localPath = new URL("." + url.pathname, clientRoot);
    return fetch$1(localPath.toString());
  };
  const port = options.port ?? 8085;
  _server = new Server({
    port,
    hostname: options.hostname ?? "0.0.0.0",
    handler
  });
  _startPromise = Promise.resolve(_server.listenAndServe());
  console.error(`Server running on port ${port}`);
}
function createExports(manifest, options) {
  const app = new App(manifest);
  return {
    async stop() {
      if (_server) {
        _server.close();
        _server = void 0;
      }
      await Promise.resolve(_startPromise);
    },
    running() {
      return _server !== void 0;
    },
    async start() {
      return start$1(manifest, options);
    },
    async handle(request) {
      return app.render(request);
    }
  };
}
var adapter = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createExports,
  start: start$1
}, Symbol.toStringTag, { value: "Module" }));
var n$1;
var l$2;
var u$2;
var t$1;
var o$3;
var f$2 = {};
var e$2 = [];
var c$2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function a$2(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function h$1(l2, u2, i2) {
  var t2, o2, r2, f2 = {};
  for (r2 in u2)
    "key" == r2 ? t2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$1.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r2 in l2.defaultProps)
      void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return v$2(l2, f2, t2, o2, null);
}
function v$2(n2, i2, t2, o2, r2) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u$2 : r2 };
  return null == r2 && null != l$2.vnode && l$2.vnode(f2), f2;
}
function p$2(n2) {
  return n2.children;
}
function d$2(n2, l2) {
  this.props = n2, this.context = l2;
}
function _$2(n2, l2) {
  if (null == l2)
    return n2.__ ? _$2(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? _$2(n2) : null;
}
function k$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return k$1(n2);
  }
}
function b$1(n2) {
  (!n2.__d && (n2.__d = true) && t$1.push(n2) && !g$2.__r++ || o$3 !== l$2.debounceRendering) && ((o$3 = l$2.debounceRendering) || setTimeout)(g$2);
}
function g$2() {
  for (var n2; g$2.__r = t$1.length; )
    n2 = t$1.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$1 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r2;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = s$1({}, t2)).__v = t2.__v + 1, j$1(r2, t2, i2, l2.__n, void 0 !== r2.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _$2(t2) : o2, t2.__h), z$1(u2, t2), t2.__e != o2 && k$1(t2)));
    });
}
function w$1(n2, l2, u2, i2, t2, o2, r2, c2, s2, a2) {
  var h2, y2, d2, k2, b2, g2, w2, x2 = i2 && i2.__k || e$2, C2 = x2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v$2(null, k2, null, null, k2) : Array.isArray(k2) ? v$2(p$2, { children: k2 }, null, null, null) : k2.__b > 0 ? v$2(k2.type, k2.props, k2.key, null, k2.__v) : k2)) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x2[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
        x2[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d2 = x2[y2]) && k2.key == d2.key && k2.type === d2.type) {
            x2[y2] = void 0;
            break;
          }
          d2 = null;
        }
      j$1(n2, k2, d2 = d2 || f$2, t2, o2, r2, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m$2(k2, s2, n2) : s2 = A(n2, k2, d2, x2, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _$2(d2));
    }
  for (u2.__e = g2, h2 = C2; h2--; )
    null != x2[h2] && ("function" == typeof u2.type && null != x2[h2].__e && x2[h2].__e == u2.__d && (u2.__d = _$2(i2, h2 + 1)), N(x2[h2], x2[h2]));
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M(w2[h2], w2[++h2], w2[++h2]);
}
function m$2(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m$2(i2, l2, u2) : A(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function A(n2, l2, u2, i2, t2, o2) {
  var r2, f2, e2;
  if (void 0 !== l2.__d)
    r2 = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != o2 || null == t2.parentNode)
    n:
      if (null == o2 || o2.parentNode !== n2)
        n2.appendChild(t2), r2 = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r2 = o2;
      }
  return void 0 !== r2 ? r2 : t2.nextSibling;
}
function C(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || H(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H(n2, o2, l2[o2], u2[o2], i2);
}
function $(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c$2.test(l2) ? u2 : u2 + "px";
}
function H(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T : I, o2) : n2.removeEventListener(l2, o2 ? T : I, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null != u2 && (false !== u2 || "a" === l2[0] && "r" === l2[1]) ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function I(n2) {
  this.l[n2.type + false](l$2.event ? l$2.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l$2.event ? l$2.event(n2) : n2);
}
function j$1(n2, u2, i2, t2, o2, r2, f2, e2, c2) {
  var a2, h2, v2, y2, _2, k2, b2, g2, m2, x2, A2, C2, $2, H2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (a2 = l$2.__b) && a2(u2);
  try {
    n:
      if ("function" == typeof H2) {
        if (g2 = u2.props, m2 = (a2 = H2.contextType) && t2[a2.__c], x2 = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in H2 && H2.prototype.render ? u2.__c = h2 = new H2(g2, x2) : (u2.__c = h2 = new d$2(g2, x2), h2.constructor = H2, h2.render = O), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != H2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s$1({}, h2.__s)), s$1(h2.__s, H2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
          null == H2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == H2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x2), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x2) || u2.__v === i2.__v) {
            h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), h2.__h.length && f2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x2), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k2);
          });
        }
        if (h2.context = x2, h2.props = g2, h2.__v = u2, h2.__P = n2, A2 = l$2.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
          h2.state = h2.__s, h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context);
        else
          do {
            h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++C2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = s$1(s$1({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), $2 = null != a2 && a2.type === p$2 && null == a2.key ? a2.props.children : a2, w$1(n2, Array.isArray($2) ? $2 : [$2], u2, i2, t2, o2, r2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L(i2.__e, u2, i2, t2, o2, r2, f2, c2);
    (a2 = l$2.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l$2.__e(n3, u2, i2);
  }
}
function z$1(n2, u2) {
  l$2.__c && l$2.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$2.__e(n3, u3.__v);
    }
  });
}
function L(l2, u2, i2, t2, o2, r2, e2, c2) {
  var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
  if ("svg" === d2 && (o2 = true), null != r2) {
    for (; k2 < r2.length; k2++)
      if ((s2 = r2[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, r2[k2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r2 = null, c2 = false;
  }
  if (null === d2)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (r2 = r2 && n$1.call(l2.childNodes), h2 = (y2 = i2.props || f$2).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (null != r2)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C(l2, p2, y2, o2, c2), v2)
      u2.__k = [];
    else if (k2 = u2.props.children, w$1(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r2, e2, r2 ? r2[0] : i2.__k && _$2(i2, 0), c2), null != r2)
      for (k2 = r2.length; k2--; )
        null != r2[k2] && a$2(r2[k2]);
    c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y2.value) && H(l2, "value", k2, y2.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
function M(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$2.__e(n3, i2);
  }
}
function N(n2, u2, i2) {
  var t2, o2;
  if (l$2.unmount && l$2.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$2.__e(n3, u2);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N(t2[o2], u2, "function" != typeof n2.type);
  i2 || null == n2.__e || a$2(n2.__e), n2.__e = n2.__d = void 0;
}
function O(n2, l2, u2) {
  return this.constructor(n2, u2);
}
n$1 = e$2.slice, l$2 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r2 = t2.__d), r2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$2 = 0, d$2.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$1({}, this.state), "function" == typeof n2 && (n2 = n2(s$1({}, u2), this.props)), n2 && s$1(u2, n2), null != n2 && this.__v && (l2 && this.__h.push(l2), b$1(this));
}, d$2.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b$1(this));
}, d$2.prototype.render = p$2, t$1 = [], g$2.__r = 0;
var r$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
var n = /[&<>"]/;
function o$2(e2) {
  var t2 = String(e2);
  return n.test(t2) ? t2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t2;
}
var a$1 = function(e2, t2) {
  return String(e2).replace(/(\n+)/g, "$1" + (t2 || "	"));
};
var i$1 = function(e2, t2, r2) {
  return String(e2).length > (t2 || 40) || !r2 && -1 !== String(e2).indexOf("\n") || -1 !== String(e2).indexOf("<");
};
var l$1 = {};
function s(e2) {
  var t2 = "";
  for (var n2 in e2) {
    var o2 = e2[n2];
    null != o2 && "" !== o2 && (t2 && (t2 += " "), t2 += "-" == n2[0] ? n2 : l$1[n2] || (l$1[n2] = n2.replace(/([A-Z])/g, "-$1").toLowerCase()), t2 += ": ", t2 += o2, "number" == typeof o2 && false === r$1.test(n2) && (t2 += "px"), t2 += ";");
  }
  return t2 || void 0;
}
function f$1(e2, t2) {
  for (var r2 in t2)
    e2[r2] = t2[r2];
  return e2;
}
function u$1(e2, t2) {
  return Array.isArray(t2) ? t2.reduce(u$1, e2) : null != t2 && false !== t2 && e2.push(t2), e2;
}
var c$1 = { shallow: true };
var p$1 = [];
var _$1 = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
var d$1 = /[\s\n\\/='"\0<>]/;
function v$1() {
  this.__d = true;
}
m$1.render = m$1;
var g$1 = function(e2, t2) {
  return m$1(e2, t2, c$1);
};
var h = [];
function m$1(t2, r2, n2) {
  r2 = r2 || {}, n2 = n2 || {};
  var o2 = l$2.__s;
  l$2.__s = true;
  var a2 = x(t2, r2, n2);
  return l$2.__c && l$2.__c(t2, h), h.length = 0, l$2.__s = o2, a2;
}
function x(r2, n2, l2, c2, g2, h2) {
  if (null == r2 || "boolean" == typeof r2)
    return "";
  if ("object" != typeof r2)
    return o$2(r2);
  var m2 = l2.pretty, y2 = m2 && "string" == typeof m2 ? m2 : "	";
  if (Array.isArray(r2)) {
    for (var b2 = "", S = 0; S < r2.length; S++)
      m2 && S > 0 && (b2 += "\n"), b2 += x(r2[S], n2, l2, c2, g2, h2);
    return b2;
  }
  var k2, w2 = r2.type, O2 = r2.props, C2 = false;
  if ("function" == typeof w2) {
    if (C2 = true, !l2.shallow || !c2 && false !== l2.renderRootComponent) {
      if (w2 === p$2) {
        var A2 = [];
        return u$1(A2, r2.props.children), x(A2, n2, l2, false !== l2.shallowHighOrder, g2, h2);
      }
      var H2, j2 = r2.__c = { __v: r2, context: n2, props: r2.props, setState: v$1, forceUpdate: v$1, __d: true, __h: [] };
      l$2.__b && l$2.__b(r2);
      var F = l$2.__r;
      if (w2.prototype && "function" == typeof w2.prototype.render) {
        var M2 = w2.contextType, T2 = M2 && n2[M2.__c], $2 = null != M2 ? T2 ? T2.props.value : M2.__ : n2;
        (j2 = r2.__c = new w2(O2, $2)).__v = r2, j2._dirty = j2.__d = true, j2.props = O2, null == j2.state && (j2.state = {}), null == j2._nextState && null == j2.__s && (j2._nextState = j2.__s = j2.state), j2.context = $2, w2.getDerivedStateFromProps ? j2.state = f$1(f$1({}, j2.state), w2.getDerivedStateFromProps(j2.props, j2.state)) : j2.componentWillMount && (j2.componentWillMount(), j2.state = j2._nextState !== j2.state ? j2._nextState : j2.__s !== j2.state ? j2.__s : j2.state), F && F(r2), H2 = j2.render(j2.props, j2.state, j2.context);
      } else
        for (var L2 = w2.contextType, E = L2 && n2[L2.__c], D = null != L2 ? E ? E.props.value : L2.__ : n2, N2 = 0; j2.__d && N2++ < 25; )
          j2.__d = false, F && F(r2), H2 = w2.call(r2.__c, O2, D);
      return j2.getChildContext && (n2 = f$1(f$1({}, n2), j2.getChildContext())), l$2.diffed && l$2.diffed(r2), x(H2, n2, l2, false !== l2.shallowHighOrder, g2, h2);
    }
    w2 = (k2 = w2).displayName || k2 !== Function && k2.name || function(e2) {
      var t2 = (Function.prototype.toString.call(e2).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t2) {
        for (var r3 = -1, n3 = p$1.length; n3--; )
          if (p$1[n3] === e2) {
            r3 = n3;
            break;
          }
        r3 < 0 && (r3 = p$1.push(e2) - 1), t2 = "UnnamedComponent" + r3;
      }
      return t2;
    }(k2);
  }
  var P, R, U = "<" + w2;
  if (O2) {
    var W = Object.keys(O2);
    l2 && true === l2.sortAttributes && W.sort();
    for (var q = 0; q < W.length; q++) {
      var z2 = W[q], I2 = O2[z2];
      if ("children" !== z2) {
        if (!d$1.test(z2) && (l2 && l2.allAttributes || "key" !== z2 && "ref" !== z2 && "__self" !== z2 && "__source" !== z2)) {
          if ("defaultValue" === z2)
            z2 = "value";
          else if ("defaultChecked" === z2)
            z2 = "checked";
          else if ("defaultSelected" === z2)
            z2 = "selected";
          else if ("className" === z2) {
            if (void 0 !== O2.class)
              continue;
            z2 = "class";
          } else
            g2 && /^xlink:?./.test(z2) && (z2 = z2.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if ("htmlFor" === z2) {
            if (O2.for)
              continue;
            z2 = "for";
          }
          "style" === z2 && I2 && "object" == typeof I2 && (I2 = s(I2)), "a" === z2[0] && "r" === z2[1] && "boolean" == typeof I2 && (I2 = String(I2));
          var V = l2.attributeHook && l2.attributeHook(z2, I2, n2, l2, C2);
          if (V || "" === V)
            U += V;
          else if ("dangerouslySetInnerHTML" === z2)
            R = I2 && I2.__html;
          else if ("textarea" === w2 && "value" === z2)
            P = I2;
          else if ((I2 || 0 === I2 || "" === I2) && "function" != typeof I2) {
            if (!(true !== I2 && "" !== I2 || (I2 = z2, l2 && l2.xml))) {
              U = U + " " + z2;
              continue;
            }
            if ("value" === z2) {
              if ("select" === w2) {
                h2 = I2;
                continue;
              }
              "option" === w2 && h2 == I2 && void 0 === O2.selected && (U += " selected");
            }
            U = U + " " + z2 + '="' + o$2(I2) + '"';
          }
        }
      } else
        P = I2;
    }
  }
  if (m2) {
    var Z = U.replace(/\n\s*/, " ");
    Z === U || ~Z.indexOf("\n") ? m2 && ~U.indexOf("\n") && (U += "\n") : U = Z;
  }
  if (U += ">", d$1.test(w2))
    throw new Error(w2 + " is not a valid HTML tag name in " + U);
  var B, G = _$1.test(w2) || l2.voidElements && l2.voidElements.test(w2), J = [];
  if (R)
    m2 && i$1(R) && (R = "\n" + y2 + a$1(R, y2)), U += R;
  else if (null != P && u$1(B = [], P).length) {
    for (var K = m2 && ~U.indexOf("\n"), Q = false, X = 0; X < B.length; X++) {
      var Y = B[X];
      if (null != Y && false !== Y) {
        var ee = x(Y, n2, l2, true, "svg" === w2 || "foreignObject" !== w2 && g2, h2);
        if (m2 && !K && i$1(ee) && (K = true), ee)
          if (m2) {
            var te = ee.length > 0 && "<" != ee[0];
            Q && te ? J[J.length - 1] += ee : J.push(ee), Q = te;
          } else
            J.push(ee);
      }
    }
    if (m2 && K)
      for (var re = J.length; re--; )
        J[re] = "\n" + y2 + a$1(J[re], y2);
  }
  if (J.length || R)
    U += J.join("");
  else if (l2 && l2.xml)
    return U.substring(0, U.length - 1) + " />";
  return !G || B || R ? (m2 && ~U.indexOf("\n") && (U += "\n"), U = U + "</" + w2 + ">") : U = U.replace(/>$/, " />"), U;
}
m$1.shallowRender = g$1;
var StaticHtml = ({ value, name }) => {
  if (!value)
    return null;
  return h$1("astro-slot", { name, dangerouslySetInnerHTML: { __html: value } });
};
StaticHtml.shouldComponentUpdate = () => false;
var slotName$1 = (str) => str.trim().replace(/[-_]([a-z])/g, (_2, w2) => w2.toUpperCase());
var originalConsoleError$1;
var consoleFilterRefs$1 = 0;
function check$1(Component, props, children) {
  if (typeof Component !== "function")
    return false;
  if (Component.prototype != null && typeof Component.prototype.render === "function") {
    return d$2.isPrototypeOf(Component);
  }
  useConsoleFilter$1();
  try {
    try {
      const { html } = renderToStaticMarkup$1(Component, props, children);
      if (typeof html !== "string") {
        return false;
      }
      return !/\<undefined\>/.test(html);
    } catch (err) {
      return false;
    }
  } finally {
    finishUsingConsoleFilter$1();
  }
}
function renderToStaticMarkup$1(Component, props, { default: children, ...slotted }) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName$1(key);
    slots[name] = h$1(StaticHtml, { value, name });
  }
  const newProps = { ...props, ...slots };
  const html = m$1(
    h$1(Component, newProps, children != null ? h$1(StaticHtml, { value: children }) : children)
  );
  return { html };
}
function useConsoleFilter$1() {
  consoleFilterRefs$1++;
  if (!originalConsoleError$1) {
    originalConsoleError$1 = console.error;
    try {
      console.error = filteredConsoleError$1;
    } catch (error2) {
    }
  }
}
function finishUsingConsoleFilter$1() {
  consoleFilterRefs$1--;
}
function filteredConsoleError$1(msg, ...rest) {
  if (consoleFilterRefs$1 > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError$1(msg, ...rest);
}
var _renderer1 = {
  check: check$1,
  renderToStaticMarkup: renderToStaticMarkup$1
};
var AstroJSX = "astro:jsx";
var Empty = Symbol("empty");
var toSlotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_2, w2) => w2.toUpperCase());
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function transformSlots(vnode) {
  if (typeof vnode.type === "string")
    return vnode;
  const slots = {};
  if (isVNode(vnode.props.children)) {
    const child = vnode.props.children;
    if (!isVNode(child))
      return;
    if (!("slot" in child.props))
      return;
    const name = toSlotName(child.props.slot);
    slots[name] = [child];
    slots[name]["$$slot"] = true;
    delete child.props.slot;
    delete vnode.props.children;
  }
  if (Array.isArray(vnode.props.children)) {
    vnode.props.children = vnode.props.children.map((child) => {
      if (!isVNode(child))
        return child;
      if (!("slot" in child.props))
        return child;
      const name = toSlotName(child.props.slot);
      if (Array.isArray(slots[name])) {
        slots[name].push(child);
      } else {
        slots[name] = [child];
        slots[name]["$$slot"] = true;
      }
      delete child.props.slot;
      return Empty;
    }).filter((v2) => v2 !== Empty);
  }
  Object.assign(vnode.props, slots);
}
function markRawChildren(child) {
  if (typeof child === "string")
    return markHTMLString(child);
  if (Array.isArray(child))
    return child.map((c2) => markRawChildren(c2));
  return child;
}
function transformSetDirectives(vnode) {
  if (!("set:html" in vnode.props || "set:text" in vnode.props))
    return;
  if ("set:html" in vnode.props) {
    const children = markRawChildren(vnode.props["set:html"]);
    delete vnode.props["set:html"];
    Object.assign(vnode.props, { children });
    return;
  }
  if ("set:text" in vnode.props) {
    const children = vnode.props["set:text"];
    delete vnode.props["set:text"];
    Object.assign(vnode.props, { children });
    return;
  }
}
function createVNode(type, props) {
  const vnode = {
    [AstroJSX]: true,
    type,
    props: props ?? {}
  };
  transformSetDirectives(vnode);
  transformSlots(vnode);
  return vnode;
}
var ClientOnlyPlaceholder = "astro-client-only";
var skipAstroJSXCheck = /* @__PURE__ */ new WeakSet();
var originalConsoleError;
var consoleFilterRefs = 0;
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v2) => renderJSX(result, v2)))).join("")
      );
  }
  if (isVNode(vnode)) {
    switch (true) {
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        return markHTMLString(await renderToString(result, vnode.type, props, slots));
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c2) => extractSlots2(c2));
        }
        if (!isVNode(child)) {
          _slots2.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots2[child.props.slot] = [..._slots2[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots2.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skipAstroJSXCheck.add(vnode.type);
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function" && !skipAstroJSXCheck.has(vnode.type)) {
        useConsoleFilter();
        try {
          const output2 = await vnode.type(vnode.props ?? {});
          if (output2 && output2[AstroJSX]) {
            return await renderJSX(result, output2);
          } else if (!output2) {
            return await renderJSX(result, output2);
          }
        } catch (e2) {
          skipAstroJSXCheck.add(vnode.type);
        } finally {
          finishUsingConsoleFilter();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots2 = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots2[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots2)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponent(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponent(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      if (typeof output !== "string" && Symbol.asyncIterator in output) {
        let body = "";
        for await (const chunk of output) {
          let html = stringifyChunk(result, chunk);
          body += html;
        }
        return markHTMLString(body);
      } else {
        return markHTMLString(output);
      }
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, children)}</${tag}>`
    )}`
  );
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error2) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
}
var slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_2, w2) => w2.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e2) {
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html };
}
var server_default = {
  check,
  renderToStaticMarkup
};
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
var $$metadata$c = createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/Technologies.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$k = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/Technologies.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$Technologies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Technologies;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<div class="hidden xl:flex absolute inset-0 -z-10">
	<div id="icons" class="relative [&>svg]:p-4 [&>svg]:w-21 [&>svg]:h-21 [&>svg]:fill-current [&>svg]:opacity-0 [&>svg]:absolute h-full">
		<svg viewBox="0 0 24 24">
			<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z">
			</path>
		</svg>
		<svg viewBox="0 0 24 24">
			<path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
			</path>
		</svg>

		<svg viewBox="0 0 1280 1280" fill="none">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M815.039 94.6439C824.758 106.709 829.714 122.99 839.626 155.553L1056.17 866.902C976.107 825.368 889.072 795.413 797.281 779.252L656.29 302.798C653.983 295.002 646.822 289.654 638.693 289.654C630.542 289.654 623.368 295.03 621.08 302.853L481.795 779.011C389.579 795.1 302.146 825.109 221.741 866.793L439.347 155.388L439.348 155.388C449.291 122.882 454.262 106.629 463.982 94.5853C472.562 83.9531 483.723 75.6958 496.4 70.6002C510.76 64.8284 527.756 64.8284 561.749 64.8284H717.174C751.212 64.8284 768.23 64.8284 782.603 70.6123C795.292 75.7184 806.459 83.9923 815.039 94.6439Z" fill="black"></path>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z" fill="black"></path>
		</svg>

		<svg>
			<path d="M39.32 0v.345a7.34 7.34 0 0 1-7.338 7.338A7.34 7.34 0 0 1 24.644.345V0H0v64h64V0zm-8.778 57.15l-3.116-15.42h-.054L24 57.15h-4.294L14.84 34.493h4.24l2.902 15.42h.054l3.497-15.42H29.5l3.14 15.6h.054l3.312-15.6h4.163L34.765 57.15zm23.347 0l-1.445-5.043h-7.63l-1.112 5.043h-4.24l5.483-22.657h6.7L58.31 57.15zm-4.607-17.074h-1.784l-1.85 8.314h5.757z"></path>
		</svg>
		<svg>
			<path d="M39.32 0v.345a7.34 7.34 0 0 1-7.338 7.338A7.34 7.34 0 0 1 24.644.345V0H0v64h64V0zm-8.778 57.15l-3.116-15.42h-.054L24 57.15h-4.294L14.84 34.493h4.24l2.902 15.42h.054l3.497-15.42H29.5l3.14 15.6h.054l3.312-15.6h4.163L34.765 57.15zm23.347 0l-1.445-5.043h-7.63l-1.112 5.043h-4.24l5.483-22.657h6.7L58.31 57.15zm-4.607-17.074h-1.784l-1.85 8.314h5.757z"></path>
		</svg>
		<svg>
			<path d="M39.32 0v.345a7.34 7.34 0 0 1-7.338 7.338A7.34 7.34 0 0 1 24.644.345V0H0v64h64V0zm-8.778 57.15l-3.116-15.42h-.054L24 57.15h-4.294L14.84 34.493h4.24l2.902 15.42h.054l3.497-15.42H29.5l3.14 15.6h.054l3.312-15.6h4.163L34.765 57.15zm23.347 0l-1.445-5.043h-7.63l-1.112 5.043h-4.24l5.483-22.657h6.7L58.31 57.15zm-4.607-17.074h-1.784l-1.85 8.314h5.757z"></path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78ZM12 14.08 5.16 2.23h4.43L12 6.41l2.41-4.18h4.43Z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M23.546 10.93 13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M12 10.406A1.594 1.594 0 0 0 10.406 12 1.594 1.594 0 0 0 12 13.594 1.594 1.594 0 0 0 13.594 12 1.594 1.594 0 0 0 12 10.406Zm5.499-4.33a2.998 2.998 0 0 1 .643.054 1.668 1.668 0 0 1 .48.172 1.085 1.085 0 0 1 .29.235 1.032 1.032 0 0 1 .185.315 1.454 1.454 0 0 1 .084.452c.007.195-.015.398-.058.603-.054.261-.14.521-.244.778-.137.334-.304.66-.49.978-.245.417-.52.818-.817 1.207-.145.191-.3.376-.455.561-.22-.238-.443-.472-.673-.7a23.61 23.61 0 0 0-2.05-1.797l-.23.296.23-.296-.018-.014-.461.592.018.014a22.864 22.864 0 0 1 1.984 1.74c.241.237.475.48.703.73-.099.108-.194.22-.296.326-.099.104-.2.207-.301.308l.53.53c.106-.105.21-.212.313-.32.085-.088.164-.182.248-.272.065.078.135.152.198.231a13.317 13.317 0 0 1 .909 1.262c.211.336.404.681.564 1.036a5.23 5.23 0 0 1 .293.806 3.019 3.019 0 0 1 .102.637c.008.178-.007.351-.05.508-.034.123-.087.239-.157.338h-.001c-.068.098-.157.186-.26.256-.121.083-.264.146-.418.191-.188.054-.39.081-.6.09-.266.01-.538-.01-.814-.05-.357-.051-.713-.134-1.067-.238-.464-.137-.92-.307-1.369-.5h-.001c-.584-.253-1.153-.543-1.71-.86l-.025-.015c.578-.377 1.144-.77 1.686-1.194l-.21-.27.211.27.018-.015-.463-.59-.017.014c-.695.542-1.418 1.047-2.168 1.505a18.53 18.53 0 0 1-1.827.983c-.473.219-.954.415-1.444.576a8.68 8.68 0 0 1-1.142.296c-.286.052-.571.086-.853.09-.222.003-.438-.013-.643-.055-.175-.036-.338-.092-.48-.172-.111-.063-.21-.142-.29-.234-.079-.091-.142-.199-.185-.315-.051-.137-.078-.292-.084-.453a2.54 2.54 0 0 1 .058-.603c.055-.261.14-.52.245-.777a7.704 7.704 0 0 1 .49-.978 12.09 12.09 0 0 1 1.271-1.767c.232.251.469.497.712.737a23.645 23.645 0 0 0 2.02 1.765l.461-.591a22.9 22.9 0 0 1-1.955-1.709c-.254-.25-.501-.506-.741-.769.099-.108.195-.219.295-.325.103-.107.206-.213.31-.317l-.53-.53c-.108.108-.215.218-.321.328-.085.089-.165.183-.248.273-.055-.066-.114-.128-.169-.195-.329-.406-.638-.827-.916-1.263-.214-.338-.408-.683-.571-1.04-.126-.275-.233-.555-.308-.838-.057-.215-.094-.428-.102-.637a1.67 1.67 0 0 1 .05-.507c.034-.124.087-.239.157-.339h.001c.068-.098.158-.186.26-.256a1.446 1.446 0 0 1 .419-.19c.187-.055.389-.082.599-.09a4.545 4.545 0 0 1 .814.048 7.708 7.708 0 0 1 1.067.24 12.092 12.092 0 0 1 1.369.5 17.248 17.248 0 0 1 1.736.874 24.003 24.003 0 0 0-1.694 1.202l.462.59c.683-.534 1.393-1.031 2.13-1.484.594-.363 1.203-.697 1.83-.99.474-.222.956-.42 1.448-.583a8.816 8.816 0 0 1 1.146-.303c.298-.056.595-.092.887-.096Zm-.01-.75h-.001c-.346.005-.684.047-1.014.108a9.546 9.546 0 0 0-1.245.329 14.202 14.202 0 0 0-1.529.616c-.583.272-1.146.582-1.696.91-.121-.073-.243-.145-.367-.215-.577-.329-1.171-.632-1.785-.897-.472-.203-.955-.385-1.455-.531-.38-.112-.772-.204-1.172-.262-.309-.044-.626-.068-.95-.055-.254.01-.516.043-.776.117-.218.064-.436.156-.636.294a1.774 1.774 0 0 0-.717 1.014c-.068.247-.087.497-.077.737a3.728 3.728 0 0 0 .127.798 6.016 6.016 0 0 0 .351.959 9.548 9.548 0 0 0 .62 1.128 14.203 14.203 0 0 0 .967 1.335c.08.098.166.19.248.286-.189.222-.375.446-.552.679-.311.408-.604.834-.867 1.282a8.44 8.44 0 0 0-.538 1.075 5.28 5.28 0 0 0-.283.908c-.053.249-.083.512-.073.782a2.182 2.182 0 0 0 .13.688v.001a1.775 1.775 0 0 0 .81.94 2.403 2.403 0 0 0 .697.253 3.699 3.699 0 0 0 .805.07 5.97 5.97 0 0 0 .977-.102l.001-.001a9.412 9.412 0 0 0 1.24-.32c.523-.173 1.031-.38 1.526-.61.599-.278 1.178-.593 1.742-.93.121.072.243.144.366.214a17.99 17.99 0 0 0 1.785.898 12.832 12.832 0 0 0 1.455.53c.38.112.772.204 1.172.262a5.284 5.284 0 0 0 .95.056c.254-.01.516-.044.776-.118.218-.063.436-.156.636-.294a1.775 1.775 0 0 0 .717-1.014c.068-.248.087-.497.077-.736-.011-.277-.06-.544-.127-.799-.085-.322-.202-.629-.335-.923-.178-.393-.387-.767-.612-1.127-.294-.466-.618-.908-.959-1.333-.09-.111-.188-.216-.28-.324.189-.222.374-.447.552-.679.311-.409.604-.835.867-1.283a8.441 8.441 0 0 0 .538-1.075 5.277 5.277 0 0 0 .283-.907c.053-.25.083-.513.073-.783-.007-.226-.045-.46-.13-.688v-.001a1.775 1.775 0 0 0-.81-.94c-.224-.126-.462-.204-.697-.252a3.7 3.7 0 0 0-.805-.07ZM12 0l10.392 6v12L12 24 1.607 18V6Z"></path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z">
			</path>
		</svg>
	</div>
</div>

<script type="module">
	const hero = document.getElementById('icons')
	const svgs = Array.from(hero.querySelectorAll('svg'))

	const w = window.innerWidth
	const h = window.innerHeight - 300

	function animateBackgroundIcons() {
		const availableSvgs = svgs.filter((svg) => !svg.isAnimating)
		const svgToAnimate = availableSvgs[Math.floor(Math.random() * availableSvgs.length)]
		if (!svgToAnimate) return

		svgToAnimate.addEventListener(
			'animationend',
			() => {
				svgToAnimate.classList.remove('animate-moving-background')
				svgToAnimate.removeAttribute('style')
				svgToAnimate.isAnimating = false
			},
			{ once: true }
		)

		svgToAnimate.setAttribute(
			'style',
			\`top: \${Math.floor(Math.random() * h)}px;
				left: \${Math.floor(Math.random() * w)}px;\`
		)

		svgToAnimate.classList.add('animate-moving-background')
		svgToAnimate.isAnimating = true
	}

	setInterval(animateBackgroundIcons, 1000)
	animateBackgroundIcons()
<\/script>`], ["", `<div class="hidden xl:flex absolute inset-0 -z-10">
	<div id="icons" class="relative [&>svg]:p-4 [&>svg]:w-21 [&>svg]:h-21 [&>svg]:fill-current [&>svg]:opacity-0 [&>svg]:absolute h-full">
		<svg viewBox="0 0 24 24">
			<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z">
			</path>
		</svg>
		<svg viewBox="0 0 24 24">
			<path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
			</path>
		</svg>

		<svg viewBox="0 0 1280 1280" fill="none">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M815.039 94.6439C824.758 106.709 829.714 122.99 839.626 155.553L1056.17 866.902C976.107 825.368 889.072 795.413 797.281 779.252L656.29 302.798C653.983 295.002 646.822 289.654 638.693 289.654C630.542 289.654 623.368 295.03 621.08 302.853L481.795 779.011C389.579 795.1 302.146 825.109 221.741 866.793L439.347 155.388L439.348 155.388C449.291 122.882 454.262 106.629 463.982 94.5853C472.562 83.9531 483.723 75.6958 496.4 70.6002C510.76 64.8284 527.756 64.8284 561.749 64.8284H717.174C751.212 64.8284 768.23 64.8284 782.603 70.6123C795.292 75.7184 806.459 83.9923 815.039 94.6439Z" fill="black"></path>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z" fill="black"></path>
		</svg>

		<svg>
			<path d="M39.32 0v.345a7.34 7.34 0 0 1-7.338 7.338A7.34 7.34 0 0 1 24.644.345V0H0v64h64V0zm-8.778 57.15l-3.116-15.42h-.054L24 57.15h-4.294L14.84 34.493h4.24l2.902 15.42h.054l3.497-15.42H29.5l3.14 15.6h.054l3.312-15.6h4.163L34.765 57.15zm23.347 0l-1.445-5.043h-7.63l-1.112 5.043h-4.24l5.483-22.657h6.7L58.31 57.15zm-4.607-17.074h-1.784l-1.85 8.314h5.757z"></path>
		</svg>
		<svg>
			<path d="M39.32 0v.345a7.34 7.34 0 0 1-7.338 7.338A7.34 7.34 0 0 1 24.644.345V0H0v64h64V0zm-8.778 57.15l-3.116-15.42h-.054L24 57.15h-4.294L14.84 34.493h4.24l2.902 15.42h.054l3.497-15.42H29.5l3.14 15.6h.054l3.312-15.6h4.163L34.765 57.15zm23.347 0l-1.445-5.043h-7.63l-1.112 5.043h-4.24l5.483-22.657h6.7L58.31 57.15zm-4.607-17.074h-1.784l-1.85 8.314h5.757z"></path>
		</svg>
		<svg>
			<path d="M39.32 0v.345a7.34 7.34 0 0 1-7.338 7.338A7.34 7.34 0 0 1 24.644.345V0H0v64h64V0zm-8.778 57.15l-3.116-15.42h-.054L24 57.15h-4.294L14.84 34.493h4.24l2.902 15.42h.054l3.497-15.42H29.5l3.14 15.6h.054l3.312-15.6h4.163L34.765 57.15zm23.347 0l-1.445-5.043h-7.63l-1.112 5.043h-4.24l5.483-22.657h6.7L58.31 57.15zm-4.607-17.074h-1.784l-1.85 8.314h5.757z"></path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78ZM12 14.08 5.16 2.23h4.43L12 6.41l2.41-4.18h4.43Z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M23.546 10.93 13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M12 10.406A1.594 1.594 0 0 0 10.406 12 1.594 1.594 0 0 0 12 13.594 1.594 1.594 0 0 0 13.594 12 1.594 1.594 0 0 0 12 10.406Zm5.499-4.33a2.998 2.998 0 0 1 .643.054 1.668 1.668 0 0 1 .48.172 1.085 1.085 0 0 1 .29.235 1.032 1.032 0 0 1 .185.315 1.454 1.454 0 0 1 .084.452c.007.195-.015.398-.058.603-.054.261-.14.521-.244.778-.137.334-.304.66-.49.978-.245.417-.52.818-.817 1.207-.145.191-.3.376-.455.561-.22-.238-.443-.472-.673-.7a23.61 23.61 0 0 0-2.05-1.797l-.23.296.23-.296-.018-.014-.461.592.018.014a22.864 22.864 0 0 1 1.984 1.74c.241.237.475.48.703.73-.099.108-.194.22-.296.326-.099.104-.2.207-.301.308l.53.53c.106-.105.21-.212.313-.32.085-.088.164-.182.248-.272.065.078.135.152.198.231a13.317 13.317 0 0 1 .909 1.262c.211.336.404.681.564 1.036a5.23 5.23 0 0 1 .293.806 3.019 3.019 0 0 1 .102.637c.008.178-.007.351-.05.508-.034.123-.087.239-.157.338h-.001c-.068.098-.157.186-.26.256-.121.083-.264.146-.418.191-.188.054-.39.081-.6.09-.266.01-.538-.01-.814-.05-.357-.051-.713-.134-1.067-.238-.464-.137-.92-.307-1.369-.5h-.001c-.584-.253-1.153-.543-1.71-.86l-.025-.015c.578-.377 1.144-.77 1.686-1.194l-.21-.27.211.27.018-.015-.463-.59-.017.014c-.695.542-1.418 1.047-2.168 1.505a18.53 18.53 0 0 1-1.827.983c-.473.219-.954.415-1.444.576a8.68 8.68 0 0 1-1.142.296c-.286.052-.571.086-.853.09-.222.003-.438-.013-.643-.055-.175-.036-.338-.092-.48-.172-.111-.063-.21-.142-.29-.234-.079-.091-.142-.199-.185-.315-.051-.137-.078-.292-.084-.453a2.54 2.54 0 0 1 .058-.603c.055-.261.14-.52.245-.777a7.704 7.704 0 0 1 .49-.978 12.09 12.09 0 0 1 1.271-1.767c.232.251.469.497.712.737a23.645 23.645 0 0 0 2.02 1.765l.461-.591a22.9 22.9 0 0 1-1.955-1.709c-.254-.25-.501-.506-.741-.769.099-.108.195-.219.295-.325.103-.107.206-.213.31-.317l-.53-.53c-.108.108-.215.218-.321.328-.085.089-.165.183-.248.273-.055-.066-.114-.128-.169-.195-.329-.406-.638-.827-.916-1.263-.214-.338-.408-.683-.571-1.04-.126-.275-.233-.555-.308-.838-.057-.215-.094-.428-.102-.637a1.67 1.67 0 0 1 .05-.507c.034-.124.087-.239.157-.339h.001c.068-.098.158-.186.26-.256a1.446 1.446 0 0 1 .419-.19c.187-.055.389-.082.599-.09a4.545 4.545 0 0 1 .814.048 7.708 7.708 0 0 1 1.067.24 12.092 12.092 0 0 1 1.369.5 17.248 17.248 0 0 1 1.736.874 24.003 24.003 0 0 0-1.694 1.202l.462.59c.683-.534 1.393-1.031 2.13-1.484.594-.363 1.203-.697 1.83-.99.474-.222.956-.42 1.448-.583a8.816 8.816 0 0 1 1.146-.303c.298-.056.595-.092.887-.096Zm-.01-.75h-.001c-.346.005-.684.047-1.014.108a9.546 9.546 0 0 0-1.245.329 14.202 14.202 0 0 0-1.529.616c-.583.272-1.146.582-1.696.91-.121-.073-.243-.145-.367-.215-.577-.329-1.171-.632-1.785-.897-.472-.203-.955-.385-1.455-.531-.38-.112-.772-.204-1.172-.262-.309-.044-.626-.068-.95-.055-.254.01-.516.043-.776.117-.218.064-.436.156-.636.294a1.774 1.774 0 0 0-.717 1.014c-.068.247-.087.497-.077.737a3.728 3.728 0 0 0 .127.798 6.016 6.016 0 0 0 .351.959 9.548 9.548 0 0 0 .62 1.128 14.203 14.203 0 0 0 .967 1.335c.08.098.166.19.248.286-.189.222-.375.446-.552.679-.311.408-.604.834-.867 1.282a8.44 8.44 0 0 0-.538 1.075 5.28 5.28 0 0 0-.283.908c-.053.249-.083.512-.073.782a2.182 2.182 0 0 0 .13.688v.001a1.775 1.775 0 0 0 .81.94 2.403 2.403 0 0 0 .697.253 3.699 3.699 0 0 0 .805.07 5.97 5.97 0 0 0 .977-.102l.001-.001a9.412 9.412 0 0 0 1.24-.32c.523-.173 1.031-.38 1.526-.61.599-.278 1.178-.593 1.742-.93.121.072.243.144.366.214a17.99 17.99 0 0 0 1.785.898 12.832 12.832 0 0 0 1.455.53c.38.112.772.204 1.172.262a5.284 5.284 0 0 0 .95.056c.254-.01.516-.044.776-.118.218-.063.436-.156.636-.294a1.775 1.775 0 0 0 .717-1.014c.068-.248.087-.497.077-.736-.011-.277-.06-.544-.127-.799-.085-.322-.202-.629-.335-.923-.178-.393-.387-.767-.612-1.127-.294-.466-.618-.908-.959-1.333-.09-.111-.188-.216-.28-.324.189-.222.374-.447.552-.679.311-.409.604-.835.867-1.283a8.441 8.441 0 0 0 .538-1.075 5.277 5.277 0 0 0 .283-.907c.053-.25.083-.513.073-.783-.007-.226-.045-.46-.13-.688v-.001a1.775 1.775 0 0 0-.81-.94c-.224-.126-.462-.204-.697-.252a3.7 3.7 0 0 0-.805-.07ZM12 0l10.392 6v12L12 24 1.607 18V6Z"></path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z">
			</path>
		</svg>

		<svg viewBox="0 0 24 24">
			<path d="M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z">
			</path>
		</svg>
	</div>
</div>

<script type="module">
	const hero = document.getElementById('icons')
	const svgs = Array.from(hero.querySelectorAll('svg'))

	const w = window.innerWidth
	const h = window.innerHeight - 300

	function animateBackgroundIcons() {
		const availableSvgs = svgs.filter((svg) => !svg.isAnimating)
		const svgToAnimate = availableSvgs[Math.floor(Math.random() * availableSvgs.length)]
		if (!svgToAnimate) return

		svgToAnimate.addEventListener(
			'animationend',
			() => {
				svgToAnimate.classList.remove('animate-moving-background')
				svgToAnimate.removeAttribute('style')
				svgToAnimate.isAnimating = false
			},
			{ once: true }
		)

		svgToAnimate.setAttribute(
			'style',
			\\\`top: \\\${Math.floor(Math.random() * h)}px;
				left: \\\${Math.floor(Math.random() * w)}px;\\\`
		)

		svgToAnimate.classList.add('animate-moving-background')
		svgToAnimate.isAnimating = true
	}

	setInterval(animateBackgroundIcons, 1000)
	animateBackgroundIcons()
<\/script>`])), maybeRenderHead($$result));
});
var $$file$c = "/Users/admin/Downloads/astro-neumorphism-develop/src/components/Technologies.astro";
var $$url$c = void 0;
var $$module1$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$c,
  default: $$Technologies,
  file: $$file$c,
  url: $$url$c
}, Symbol.toStringTag, { value: "Module" }));
createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconSun.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$j = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconSun.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$IconSun = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$IconSun;
  const { className = "w-5 h-5" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")} width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <circle cx="12" cy="12" r="4"></circle>
  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
</svg>`;
});
var $$metadata$b = createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconGithub.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$i = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconGithub.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$IconGithub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$IconGithub;
  const { className = "w-5 h-5" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")} width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
  </path>
</svg>`;
});
var $$file$b = "/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconGithub.astro";
var $$url$b = void 0;
var $$module1$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$b,
  default: $$IconGithub,
  file: $$file$b,
  url: $$url$b
}, Symbol.toStringTag, { value: "Module" }));
createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconTwitter.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$h = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconTwitter.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$IconTwitter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$IconTwitter;
  const { className = "w-5 h-5" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")} width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z">
  </path>
</svg>`;
});
createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconHome.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$g = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconHome.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$IconHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$IconHome;
  const { className = "w-5 h-5" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")} viewBox="0 0 20 20" fill="currentColor">
  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
</svg>`;
});
createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconInstagram.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$f = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconInstagram.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$IconInstagram = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$IconInstagram;
  const { className = "w-5 h-5" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")} width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <rect x="4" y="4" width="16" height="16" rx="4"></rect>
  <circle cx="12" cy="12" r="3"></circle>
  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
</svg>`;
});
createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconUser.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$e = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconUser.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$IconUser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$IconUser;
  const { className = "w-5 h-5" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")} viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
</svg>`;
});
createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconBlog.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$d = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconBlog.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$IconBlog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$IconBlog;
  const { className = "w-5 h-5" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")} viewBox="0 0 20 20" fill="currentColor">
  <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path>
  <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"></path>
</svg>`;
});
createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconAstro.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$c = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconAstro.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$IconAstro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$IconAstro;
  return renderTemplate`<!--?xml version="1.0" standalone="no"?-->${maybeRenderHead($$result)}<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="2700.000000pt" height="1500.000000pt" viewBox="0 0 2700.000000 1500.000000" preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Jesse Roper
</metadata>
<g transform="translate(0.000000,1500.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M2815 13933 c-22 -104 -48 -197 -90 -323 -13 -36 -26 -83 -31 -105
l-9 -40 -185 0 c-102 0 -220 4 -262 9 -69 8 -78 7 -78 -7 0 -9 6 -21 13 -27
73 -60 247 -185 322 -230 22 -14 51 -32 64 -42 l23 -16 -22 -64 c-12 -34 -26
-72 -31 -83 -5 -11 -19 -54 -33 -95 -13 -41 -38 -109 -56 -150 -40 -96 -41
-104 -9 -108 20 -2 43 13 105 69 78 71 196 170 238 199 11 8 27 23 34 32 16
22 45 23 62 3 17 -20 95 -65 114 -65 32 0 7 66 -31 82 -16 7 -39 20 -52 30
-13 10 -34 18 -46 18 -31 0 -121 -38 -172 -72 -66 -44 -84 -34 -59 35 8 23 18
68 21 99 6 53 4 61 -25 105 -18 26 -60 73 -94 105 -33 31 -59 59 -56 62 3 3
44 8 90 12 70 6 92 12 126 35 46 31 104 94 104 111 0 16 50 88 61 88 5 0 9 -6
9 -14 0 -7 7 -19 15 -26 8 -7 15 -23 15 -36 0 -29 82 -113 134 -138 28 -13 68
-19 144 -21 89 -3 111 0 143 17 43 22 65 17 49 -12 -5 -10 -10 -30 -10 -44 0
-14 -17 -54 -39 -89 -47 -77 -111 -209 -111 -229 0 -8 -11 -21 -25 -28 -14 -7
-25 -20 -25 -28 0 -8 -10 -34 -21 -57 -18 -37 -31 -47 -86 -70 -61 -27 -69
-27 -172 -21 l-109 7 -20 -40 c-12 -22 -27 -49 -34 -60 -7 -11 -9 -23 -6 -26
3 -4 179 -7 390 -7 423 0 426 0 514 66 45 34 76 93 236 446 23 52 62 133 85
179 24 46 41 86 38 89 -3 3 -221 5 -485 4 -373 -1 -482 1 -484 11 -2 6 -14 48
-26 92 -12 44 -29 100 -37 125 -9 25 -28 95 -42 155 -24 94 -30 110 -49 113
-16 3 -23 -3 -27 -25z m956 -594 c16 -26 10 -49 -55 -197 -70 -160 -110 -236
-138 -264 -10 -10 -18 -22 -18 -28 0 -22 -99 -60 -156 -60 -32 0 -86 -5 -121
-11 -49 -9 -75 -8 -109 1 -24 7 -44 16 -44 19 0 16 66 110 116 165 68 75 92
123 150 308 9 27 27 57 42 69 25 20 36 21 175 17 115 -3 150 -7 158 -19z"></path>
<path d="M4054 13445 c-8 -11 -14 -25 -14 -32 0 -11 -25 -70 -92 -213 -17 -36
-42 -90 -55 -120 -24 -53 -46 -101 -121 -260 -19 -41 -41 -83 -49 -92 -8 -9
-13 -24 -11 -34 3 -16 23 -17 258 -15 257 2 280 6 280 40 0 10 7 26 15 37 8
10 15 25 15 32 0 7 13 40 29 75 16 34 34 74 40 90 10 26 13 27 89 27 80 0 111
-12 132 -49 10 -19 1 -46 -41 -121 -52 -94 -63 -122 -48 -131 8 -5 27 -7 43
-4 16 3 129 5 251 5 l223 0 22 63 c13 34 26 67 30 72 4 6 13 34 21 62 15 63 6
86 -47 121 -19 13 -34 28 -31 35 3 11 43 24 117 41 33 7 93 62 114 103 9 19
16 57 16 92 0 59 -1 61 -47 106 -27 25 -59 48 -73 52 -14 3 -37 12 -51 19 -20
10 -139 13 -514 16 -476 3 -488 3 -501 -17z m279 -92 c79 -7 80 -10 47 -114
-12 -35 -22 -87 -23 -116 -2 -47 -6 -56 -58 -110 -30 -32 -72 -88 -93 -124
-52 -89 -71 -99 -188 -99 -100 0 -118 7 -118 47 0 21 29 96 80 208 120 261
147 301 208 308 68 7 77 7 145 0z m734 -29 c65 -49 53 -108 -37 -178 -77 -59
-107 -114 -91 -166 19 -64 14 -119 -15 -157 l-25 -33 -100 0 c-131 0 -139 4
-139 81 0 35 -7 73 -16 90 -20 40 -11 63 39 98 91 63 133 141 123 226 -3 29
-2 55 2 59 4 5 57 6 119 4 94 -3 116 -6 140 -24z m-422 5 c47 -13 85 -45 85
-71 0 -21 -39 -85 -66 -110 -22 -19 -106 -44 -181 -53 -70 -9 -76 7 -29 83 20
33 36 65 36 71 0 17 31 75 44 83 16 11 65 10 111 -3z"></path>
<path d="M3173 13295 c-35 -21 -66 -53 -93 -92 -36 -55 -39 -64 -34 -106 5
-33 15 -53 35 -71 16 -15 33 -26 39 -26 12 0 13 62 1 76 -4 5 -11 24 -15 43
-5 30 -2 37 30 65 82 71 124 114 124 130 0 24 -29 18 -87 -19z"></path>
</g>
</svg>`;
});
createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconMenu.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$b = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/icons/IconMenu.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$IconMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$IconMenu;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 first" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
	<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16"></path>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="hidden w-6 h-6 last" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
	<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
</svg>`;
});
var $$module2$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconSun: $$IconSun,
  IconGithub: $$IconGithub,
  IconTwitter: $$IconTwitter,
  IconHome: $$IconHome,
  IconInstagram: $$IconInstagram,
  IconUser: $$IconUser,
  IconBlog: $$IconBlog,
  IconMenu: $$IconMenu,
  IconAstro: $$IconAstro
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$a = createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/RoundIconButton.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$a = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/RoundIconButton.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$RoundIconButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$RoundIconButton;
  const { type, srOnly, onclick = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button${addAttribute(type, "type")}${addAttribute(onclick, "onclick")} class="text-light-blue-light hover:text-light-blue-dark dark:text-gray-400 bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-md text-sm p-2.5 text-center inline-flex items-center mr-4 last-of-type:mr-0 border-2 border-transparent dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0">
  ${renderSlot($$result, $$slots["default"])}
  <span class="sr-only"> ${srOnly}</span>
</button>`;
});
var $$file$a = "/Users/admin/Downloads/astro-neumorphism-develop/src/components/RoundIconButton.astro";
var $$url$a = void 0;
var $$module3$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$a,
  default: $$RoundIconButton,
  file: $$file$a,
  url: $$url$a
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$9 = createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/SquareIconLink.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$9 = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/SquareIconLink.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$SquareIconLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SquareIconLink;
  const { title, href, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute(target, "target")}${addAttribute(title, "title")} class="text-light-blue-light hover:text-light-blue-dark dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0">
  ${renderSlot($$result, $$slots["default"])}
</a>`;
});
var $$file$9 = "/Users/admin/Downloads/astro-neumorphism-develop/src/components/SquareIconLink.astro";
var $$url$9 = void 0;
var $$module4$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$9,
  default: $$SquareIconLink,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: "Module" }));
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
var $$metadata$8 = createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/Layout.astro", { modules: [{ module: $$module1$2, specifier: "./Technologies.astro", assert: {} }, { module: $$module2$3, specifier: "../components/icons", assert: {} }, { module: $$module3$2, specifier: "./RoundIconButton.astro", assert: {} }, { module: $$module4$1, specifier: "./SquareIconLink.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$8 = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/Layout.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width">\n		<link rel="icon" type="image/x-icon" href="/favicon.ico">\n		<title>', "</title>\n	", '</head>\n\n	<body class="flex flex-col items-center justify-center relative box-border min-h-screen lg:overflow-hidden bg-light-primary dark:bg-gradient-main-dark">\n		', '\n		<main class="flex flex-col p-4 m-4 md:p-8 md:my-10 md:mx-12 lg:my-0 w-fit lg:w-[calc(100vw_-_50%)] rounded-tr-2xl rounded-tl-lg rounded-b-lg bg-gradient-box-light shadow-sky-light dark:bg-box-dark dark:shadow-orange-dark min-h-[calc(100vh_-_80px)] lg:h-[calc(100vh_-_100px)] justify-between">\n			<div class="flex w-full relative mb-2 md:mb-4">\n				<div class="flex w-15 -top-5 sm:top-0 sm:w-fit absolute">\n					', '\n				</div>\n				<div class="flex flex-col self-end text-right ml-auto text-xl w-fit text-light-blue-dark dark:text-dark-blue-light">\n					<h1 class="font-black leading-extra-loose md:text-3xl 2xl:text-4xl">\n						Astro\n					</h1>\n					<h1 class="font-thin leading-extra-loose text-sm md:text-2xl 2xl:text-4xl">\n						Neumorphism\n					</h1>\n				</div>\n\n				<div class="flex w-fit h-fit px-1.25 py-1.25 ml-4 2xl:ml-8 shadow-switcher rounded-2xl dark:bg-buttons-box-dark dark:shadow-box-dark-out">\n					<div class="dark:shadow-buttons-box-dark rounded-2xl w-min flex sm:w-full px-1.5 py-1.5 md:px-3 md:py-3 h-fit">\n						', '\n						<span class="mr-4"></span>\n						', "\n					</div>\n				</div>\n			</div>\n			", '\n\n			<div class="flex self-end w-fit px-1.25 py-1.25 shadow-box-up rounded-2xl dark:bg-box-dark dark:shadow-box-dark-out">\n				<div class="dark:shadow-buttons-box-dark rounded-2xl w-full px-1.5 py-1.5 md:px-3 md:py-3">\n					', "\n					", "\n					", '\n				</div>\n			</div>\n		</main>\n\n		<script>\n			const toggleTheme = () => {\n				document.documentElement.classList.toggle("dark");\n				localStorage.theme = document.documentElement.classList.contains("dark")\n					? "dark"\n					: "light";\n			};\n\n			window.toggleTheme = toggleTheme;\n\n			if (localStorage.theme === "dark") {\n				document.documentElement.classList.add("dark");\n			} else {\n				document.documentElement.classList.remove("dark");\n			}\n		<\/script>\n	</body>\n</html>'])), title, renderHead($$result), renderComponent($$result, "Technologies", $$Technologies, {}), renderComponent($$result, "IconAstro", $$IconAstro, {}), renderComponent($$result, "RoundIconButton", $$RoundIconButton, { "srOnly": "Theme color switcher", "type": "button", "onclick": "window.toggleTheme()" }, { "default": () => renderTemplate`${renderComponent($$result, "IconSun", $$IconSun, {})}` }), renderComponent($$result, "SquareIconLink", $$SquareIconLink, { "title": "Link to pabloLC GitHub", "href": "https://github.com/paablolc/", "target": "_blank" }, { "default": () => renderTemplate`${renderComponent($$result, "IconGithub", $$IconGithub, {})}` }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "SquareIconLink", $$SquareIconLink, { "title": "Go to the home page", "target": "_self", "href": "/" }, { "default": () => renderTemplate`${renderComponent($$result, "IconHome", $$IconHome, {})}` }), renderComponent($$result, "SquareIconLink", $$SquareIconLink, { "title": "Go to post list page", "target": "_self", "href": "/postlist" }, { "default": () => renderTemplate`${renderComponent($$result, "IconBlog", $$IconBlog, {})}` }), renderComponent($$result, "SquareIconLink", $$SquareIconLink, { "title": "Go to about me page", "target": "_self", "href": "/aboutme" }, { "default": () => renderTemplate`${renderComponent($$result, "IconUser", $$IconUser, {})}` }));
});
var $$file$8 = "/Users/admin/Downloads/astro-neumorphism-develop/src/components/Layout.astro";
var $$url$8 = void 0;
var $$module2$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$8,
  default: $$Layout,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: "Module" }));
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
var $$metadata$7 = createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/MainCard.astro", { modules: [{ module: $$module1$1, specifier: "./icons/IconGithub.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$7 = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/MainCard.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$MainCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MainCard;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate(_a || (_a = __template(["", '<div class="p-2.5 my-2 md:my-4 shadow-up dark:shadow-box-dark dark:bg-box-dark w-full 2xl:mx-auto rounded-lg astro-XTI24BAQ">\n	<div class="flex flex-col items-center justify-center astro-XTI24BAQ">\n		<div class="atropos py-4 px-6 2xl:px-10 shadow-down dark:shadow-box-dark dark:bg-box-dark w-full m-auto astro-XTI24BAQ">\n			<div class="atropos-scale astro-XTI24BAQ">\n				<div class="atropos-rotate astro-XTI24BAQ">\n					<div class="atropos-inner transition-all duration-700 relative p-2 border-2 rounded-md shadow-2xl border-light-blue-dark dark:border-gray-dark bg-gray-light-4 dark:bg-transparent md:backdrop-blur-sm flex flex-col astro-XTI24BAQ">\n						<div class="atropos-inner transition-all duration-700 relative py-4 px-2 md:px-8 2xl:px-15 border-4 rounded-md shadow-2xl border-light-blue-dark  bg-gray-light-4 md:backdrop-blur-sm flex flex-col dark:border-gray-dark dark:bg-transparent dark:shadow-orange-dark astro-XTI24BAQ">\n\n							<div class="flex justify-between flex-row items-center astro-XTI24BAQ">\n								<h4 class="transition-all duration-700 top-0 right-0 flex font-mono text-2xl font-bold opacity-90 astro-XTI24BAQ">\n									<div class="flex text-xs items-baseline font-black text-black/80 dark:text-dark-blue-light astro-XTI24BAQ">#pabloLC</div>\n								</h4>\n								<div class="flex items-center justify-center astro-XTI24BAQ">\n									<h4 class="transition-all duration-700 top-0 right-0 flex font-mono text-2xl font-bold opacity-90 astro-XTI24BAQ">\n										<div class="flex text-xs items-baseline font-black uppercase text-black/80 dark:text-dark-blue-light astro-XTI24BAQ">', ` #001<span class="text-lg ml-1 astro-XTI24BAQ">\u2B50\uFE0F</span> </div>
									</h4>
								</div>
							</div>
							<h1 class="flex justify-center pt-1 md:pt-2 2xl:pt-5 m-0 mx-auto font-thin leading-none tracking-normal text-lg md:text-2xl 2xl:text-3xl w-full bg-clip-text bg-gradient-to-r text-light-blue-dark dark:text-dark-blue-light astro-XTI24BAQ" data-atropos-offset="2">
								#AstroNeumorphism
							</h1>

							<div class="flex items-center justify-center pt-2 astro-XTI24BAQ" data-atropos-offset="5">
								<h2 class="inline-block w-fit px-6 py-1 text-xs min-w-fit font-thin text-center text-white rounded-xl md:w-2/3 md:text-lg bg-black/90 astro-XTI24BAQ">
									Astro 1.1 is here! \u{1F680}
								</h2>
							</div>

							<h3 data-atropos-offset="5" class="flex items-center justify-center pt-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 md:flex-row astro-XTI24BAQ">
								<div class="w-10 h-10 md:w-12 md:h-12 astro-XTI24BAQ">
									<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1280 1280" fill="none" class="astro-XTI24BAQ">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M815.039 94.6439C824.758 106.709 829.714 122.99 839.626 155.553L1056.17 866.901C976.107 825.368 889.072 795.413 797.281 779.252L656.29 302.798C653.983 295.002 646.822 289.654 638.693 289.654C630.542 289.654 623.368 295.03 621.08 302.853L481.795 779.011C389.579 795.1 302.146 825.109 221.741 866.793L439.347 155.388L439.348 155.388C449.291 122.882 454.262 106.629 463.982 94.5853C472.562 83.9531 483.723 75.6958 496.4 70.6002C510.76 64.8284 527.756 64.8284 561.749 64.8284H717.174C751.212 64.8284 768.23 64.8284 782.603 70.6123C795.292 75.7184 806.459 83.9923 815.039 94.6439Z" fill="#7687A1" class="astro-XTI24BAQ"></path>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z" fill="#FF5D01" class="astro-XTI24BAQ"></path>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z" fill="url(#paint1_linear_709_110)" class="astro-XTI24BAQ"></path>
										<defs class="astro-XTI24BAQ">
											<linearGradient id="paint1_linear_709_110" x1="1001.68" y1="652.45" x2="790.326" y2="1094.91" gradientUnits="userSpaceOnUse" class="astro-XTI24BAQ">
												<stop stop-color="#7687A1" class="astro-XTI24BAQ"></stop>
												<stop offset="1" stop-color="#7687A1" stop-opacity="0" class="astro-XTI24BAQ"></stop>
											</linearGradient>
										</defs>
									</svg>
								</div>

								<div class="flex flex-col items-center justify-center leading-none md:items-start astro-XTI24BAQ">
									<span class="block md:-mb-1 text-sm md:text-lg text-black dark:text-white/70 astro-XTI24BAQ">Astro theme</span>
									<a class="text-sm md:text-lg dark:from-white-900 dark:to-white-500 astro-XTI24BAQ" href="https://astro.build/themes/" rel="noopener" target="_blank">astro.build/themes</a>
								</div>
							</h3>
						</div>
					</div>
				</div>
			</div>

		</div>

	</div>
</div>




<script type="module">
	// @ts-nocheck
	/* eslint-disable */
	!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Atropos = e() }(this, (function () { "use strict"; function t() { return (t = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var o = arguments[e]; for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]) } return t }).apply(this, arguments) } var e = function (t, e) { return t.querySelector(e) }, o = function (t) { void 0 === t && (t = {}); var e = {}; return Object.keys(t).forEach((function (o) { void 0 !== t[o] && (e[o] = t[o]) })), e }; return function (a) { void 0 === a && (a = {}); var n, r, i, s, c, u, p, l, d, f, v, h = a, m = h.el, y = h.eventsEl, g = { __atropos__: !0, params: t({ alwaysActive: !1, activeOffset: 50, shadowOffset: 50, shadowScale: 1, duration: 300, rotate: !0, rotateTouch: !0, rotateXMax: 15, rotateYMax: 15, rotateXInvert: !1, rotateYInvert: !1, stretchX: 0, stretchY: 0, stretchZ: 0, commonOrigin: !0, shadow: !0, highlight: !0, onEnter: null, onLeave: null, onRotate: null }, o(a || {})), destroyed: !1, isActive: !1 }, M = g.params, x = []; !function t() { v = requestAnimationFrame((function () { x.forEach((function (t) { if ("function" == typeof t) t(); else { var e = t.element, o = t.prop, a = t.value; e.style[o] = a } })), x.splice(0, x.length), t() })) }(); var w, O = function (t, e) { x.push({ element: t, prop: "transitionDuration", value: e }) }, b = function (t, e) { x.push({ element: t, prop: "transitionTimingFunction", value: e }) }, T = function (t, e) { x.push({ element: t, prop: "transform", value: e }) }, X = function (t, e) { x.push({ element: t, prop: "opacity", value: e }) }, Y = function (t, e, o, a) { return t.addEventListener(e, o, a) }, _ = function (t, e, o, a) { return t.removeEventListener(e, o, a) }, L = function (t) { var e = t.rotateXPercentage, o = void 0 === e ? 0 : e, a = t.rotateYPercentage, n = void 0 === a ? 0 : a, r = t.duration, i = t.opacityOnly, s = t.easeOut; (function (t, e) { return t.querySelectorAll(e) })(m, "[data-atropos-offset], [data-atropos-opacity]").forEach((function (t) { O(t, r), b(t, s ? "ease-out" : ""); var e = function (t) { if (t.dataset.atroposOpacity && "string" == typeof t.dataset.atroposOpacity) return t.dataset.atroposOpacity.split(";").map((function (t) { return parseFloat(t) })) }(t); if (0 === o && 0 === n) i || T(t, "translate3d(0, 0, 0)"), e && X(t, e[0]); else { var a = parseFloat(t.dataset.atroposOffset) / 100; if (Number.isNaN(a) || i || T(t, "translate3d(" + -n * -a + "%, " + o * -a + "%, 0)"), e) { var c = e[0], u = e[1], p = Math.max(Math.abs(o), Math.abs(n)); X(t, c + (u - c) * p / 100) } } })) }, A = function (t, e) { var o = m !== y; if (s || (s = m.getBoundingClientRect()), o && !c && (c = y.getBoundingClientRect()), void 0 === t && void 0 === e) { var a = o ? c : s; t = a.left + a.width / 2, e = a.top + a.height / 2 } var r, i = 0, u = 0, l = s, d = l.top, f = l.left, v = l.width, h = l.height; if (o) { var g = c, w = g.top, Y = g.left, _ = g.width, A = g.height, E = v / 2 + (f - Y), R = h / 2 + (d - w), I = t - Y, P = e - w; u = M.rotateYMax * (I - E) / (_ - v / 2) * -1, i = M.rotateXMax * (P - R) / (A - h / 2), r = t - f + "px " + (e - d) + "px" } else { var j = v / 2, D = h / 2, F = t - f, C = e - d; u = M.rotateYMax * (F - j) / (v / 2) * -1, i = M.rotateXMax * (C - D) / (h / 2) } i = Math.min(Math.max(-i, -M.rotateXMax), M.rotateXMax), M.rotateXInvert && (i = -i), u = Math.min(Math.max(-u, -M.rotateYMax), M.rotateYMax), M.rotateYInvert && (u = -u); var S, k, q = i / M.rotateXMax * 100, N = u / M.rotateYMax * 100, B = (o ? N / 100 * M.stretchX : 0) * (M.rotateYInvert ? -1 : 1), Z = (o ? q / 100 * M.stretchY : 0) * (M.rotateXInvert ? -1 : 1), z = o ? Math.max(Math.abs(q), Math.abs(N)) / 100 * M.stretchZ : 0; T(n, "translate3d(" + B + "%, " + -Z + "%, " + -z + "px) rotateX(" + i + "deg) rotateY(" + u + "deg)"), r && M.commonOrigin && (S = n, k = r, x.push({ element: S, prop: "transformOrigin", value: k })), p && (O(p, M.duration + "ms"), b(p, "ease-out"), T(p, "translate3d(" + .25 * -N + "%, " + .25 * q + "%, 0)"), X(p, Math.max(Math.abs(q), Math.abs(N)) / 100)), L({ rotateXPercentage: q, rotateYPercentage: N, duration: M.duration + "ms", easeOut: !0 }), "function" == typeof M.onRotate && M.onRotate(i, u) }, E = function () { x.push((function () { return m.classList.add("atropos-active") })), O(n, M.duration + "ms"), b(n, "ease-out"), T(r, "translate3d(0,0, " + M.activeOffset + "px)"), O(r, M.duration + "ms"), b(r, "ease-out"), u && (O(u, M.duration + "ms"), b(u, "ease-out")), g.isActive = !0 }, R = function (t) { if (l = void 0, !("pointerdown" === t.type && "mouse" === t.pointerType || "pointerenter" === t.type && "mouse" !== t.pointerType)) { if ("pointerdown" === t.type && t.preventDefault(), d = t.clientX, f = t.clientY, M.alwaysActive) return s = void 0, void (c = void 0); E(), "function" == typeof M.onEnter && M.onEnter() } }, I = function (t) { !1 === l && t.cancelable && t.preventDefault() }, P = function (t) { if (M.rotate && g.isActive) { if ("mouse" !== t.pointerType) { if (!M.rotateTouch) return; t.preventDefault() } var e = t.clientX, o = t.clientY, a = e - d, n = o - f; if ("string" == typeof M.rotateTouch && (0 !== a || 0 !== n) && void 0 === l) { if (a * a + n * n >= 25) { var r = 180 * Math.atan2(Math.abs(n), Math.abs(a)) / Math.PI; l = "scroll-y" === M.rotateTouch ? r > 45 : 90 - r > 45 } !1 === l && (m.classList.add("atropos-rotate-touch"), t.cancelable && t.preventDefault()) } "mouse" !== t.pointerType && l || A(e, o) } }, j = function (t) { if (s = void 0, c = void 0, g.isActive && !(t && "pointerup" === t.type && "mouse" === t.pointerType || t && "pointerleave" === t.type && "mouse" !== t.pointerType)) { if ("string" == typeof M.rotateTouch && l && m.classList.remove("atropos-rotate-touch"), M.alwaysActive) return A(), "function" == typeof M.onRotate && M.onRotate(0, 0), void ("function" == typeof M.onLeave && M.onLeave()); x.push((function () { return m.classList.remove("atropos-active") })), O(r, M.duration + "ms"), b(r, ""), T(r, "translate3d(0,0, 0px)"), u && (O(u, M.duration + "ms"), b(u, "")), p && (O(p, M.duration + "ms"), b(p, ""), T(p, "translate3d(0, 0, 0)"), X(p, 0)), O(n, M.duration + "ms"), b(n, ""), T(n, "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"), L({ duration: M.duration + "ms" }), g.isActive = !1, "function" == typeof M.onRotate && M.onRotate(0, 0), "function" == typeof M.onLeave && M.onLeave() } }, D = function (t) { var e = t.target; !y.contains(e) && e !== y && g.isActive && j() }; return g.destroy = function () { g.destroyed = !0, cancelAnimationFrame(v), _(document, "click", D), _(y, "pointerdown", R), _(y, "pointerenter", R), _(y, "pointermove", P), _(y, "touchmove", I), _(y, "pointerleave", j), _(y, "pointerup", j), _(y, "lostpointercapture", j), delete m.__atropos__ }, "string" == typeof m && (m = e(document, m)), m && (m.__atropos__ || (void 0 !== y ? "string" == typeof y && (y = e(document, y)) : y = m, Object.assign(g, { el: m }), n = e(m, ".atropos-rotate"), r = e(m, ".atropos-scale"), i = e(m, ".atropos-inner"), m.__atropos__ = g)), m && y && (M.shadow && ((u = e(m, ".atropos-shadow")) || ((u = document.createElement("span")).classList.add("atropos-shadow"), w = !0), T(u, "translate3d(0,0,-" + M.shadowOffset + "px) scale(" + M.shadowScale + ")"), w && n.appendChild(u)), M.highlight && function () { var t; (p = e(m, ".atropos-highlight")) || ((p = document.createElement("span")).classList.add("atropos-highlight"), t = !0), T(p, "translate3d(0,0,0)"), t && i.appendChild(p) }(), M.rotateTouch && ("string" == typeof M.rotateTouch ? m.classList.add("atropos-rotate-touch-" + M.rotateTouch) : m.classList.add("atropos-rotate-touch")), e(m, "[data-atropos-opacity]") && L({ opacityOnly: !0 }), Y(document, "click", D), Y(y, "pointerdown", R), Y(y, "pointerenter", R), Y(y, "pointermove", P), Y(y, "touchmove", I), Y(y, "pointerleave", j), Y(y, "pointerup", j), Y(y, "lostpointercapture", j), M.alwaysActive && (E(), A())), g } })); /* eslint-enable */
	/* eslint-enable */

	window.Atropos({
		el: '.atropos',
		activeOffset: 120,
		shadowScale: 5
	})

<\/script>`])), maybeRenderHead($$result), renderComponent($$result, "IconGithub", $$IconGithub, { "class": "astro-XTI24BAQ" }));
});
var $$file$7 = "/Users/admin/Downloads/astro-neumorphism-develop/src/components/MainCard.astro";
var $$url$7 = void 0;
var $$module2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$7,
  default: $$MainCard,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: "Module" }));
var t;
var r;
var u;
var i;
var o$1 = 0;
var c = [];
var f = [];
var e$1 = l$2.__b;
var a = l$2.__r;
var v = l$2.diffed;
var l = l$2.__c;
var m = l$2.unmount;
function d(t2, u2) {
  l$2.__h && l$2.__h(r, t2, o$1 || u2), o$1 = 0;
  var i2 = r.__H || (r.__H = { __: [], __h: [] });
  return t2 >= i2.__.length && i2.__.push({ __V: f }), i2.__[t2];
}
function p(n2) {
  return o$1 = 1, y(z, n2);
}
function y(n2, u2, i2) {
  var o2 = d(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : z(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !o2.__c.u)) {
    o2.__c.__H.u = true;
    var c2 = o2.__c.shouldComponentUpdate;
    o2.__c.shouldComponentUpdate = function(n3, t2, r2) {
      if (!o2.__c.__H)
        return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      return u3.every(function(n4) {
        return !n4.__N;
      }) ? !c2 || c2(n3, t2, r2) : !u3.every(function(n4) {
        if (!n4.__N)
          return true;
        var t3 = n4.__[0];
        return n4.__ = n4.__N, n4.__N = void 0, t3 === n4.__[0];
      }) && (!c2 || c2(n3, t2, r2));
    };
  }
  return o2.__N || o2.__;
}
function _(u2, i2) {
  var o2 = d(t++, 3);
  !l$2.__s && w(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r.__H.__h.push(o2));
}
function b() {
  for (var t2; t2 = c.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(j), t2.__H.__h.forEach(k), t2.__H.__h = [];
      } catch (r2) {
        t2.__H.__h = [], l$2.__e(r2, t2.__v);
      }
}
l$2.__b = function(n2) {
  r = null, e$1 && e$1(n2);
}, l$2.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = f, n3.__N = n3.i = void 0;
  })) : (i2.__h.forEach(j), i2.__h.forEach(k), i2.__h = [])), u = r;
}, l$2.diffed = function(t2) {
  v && v(t2);
  var o2 = t2.__c;
  o2 && o2.__H && (o2.__H.__h.length && (1 !== c.push(o2) && i === l$2.requestAnimationFrame || ((i = l$2.requestAnimationFrame) || function(n2) {
    var t3, r2 = function() {
      clearTimeout(u2), g && cancelAnimationFrame(t3), setTimeout(n2);
    }, u2 = setTimeout(r2, 100);
    g && (t3 = requestAnimationFrame(r2));
  })(b)), o2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== f && (n2.__ = n2.__V), n2.i = void 0, n2.__V = f;
  })), u = r = null;
}, l$2.__c = function(t2, r2) {
  r2.some(function(t3) {
    try {
      t3.__h.forEach(j), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || k(n2);
      });
    } catch (u2) {
      r2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r2 = [], l$2.__e(u2, t3.__v);
    }
  }), l && l(t2, r2);
}, l$2.unmount = function(t2) {
  m && m(t2);
  var r2, u2 = t2.__c;
  u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
    try {
      j(n2);
    } catch (n3) {
      r2 = n3;
    }
  }), r2 && l$2.__e(r2, u2.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function k(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function w(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function z(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
var o = 0;
function e(_2, e2, n2, t2, f2) {
  var l2, s2, u2 = {};
  for (s2 in e2)
    "ref" == s2 ? l2 = e2[s2] : u2[s2] = e2[s2];
  var a2 = { type: _2, props: u2, key: n2, ref: l2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --o, __source: f2, __self: t2 };
  if ("function" == typeof _2 && (l2 = _2.defaultProps))
    for (s2 in l2)
      void 0 === u2[s2] && (u2[s2] = l2[s2]);
  return l$2.vnode && l$2.vnode(a2), a2;
}
var Article = ({
  article
}) => {
  const {
    guid,
    link,
    thumbnail,
    title,
    categories
  } = article;
  return e("div", {
    class: "flex relative shadow-box-up dark:shadow-buttons-box-dark rounded-lg p-3 mb-3",
    children: [e("a", {
      class: "absolute w-full h-full left-0",
      target: "_black",
      href: link
    }), e("img", {
      class: "hidden lg:flex lg:w-15 lg:h-15 2xl:w-25 2xl:h-25 object-cover rounded-full mr-4",
      src: thumbnail,
      alt: "img"
    }), e("div", {
      class: "flex flex-col",
      children: [e("h1", {
        class: "text-xxs 2xl:text-xs items-baseline font-bold capitalize text-light-blue-dark dark:text-dark-blue-light",
        children: title
      }), e("ul", {
        class: "flex my-auto",
        children: categories.map((category) => e("li", {
          class: "text-4xs lg:text-3xs font-thin text-light-blue-dark dark:text-dark-blue-light py-1 px-2 mr-1 my-1 rounded-lg last-of-type:mr-0 shadow-box-up dark:shadow-buttons-box-dark bg-gradient-box-light h-min w-fit dark:bg-gradient-box-dark border border-light-blue-dark dark:border-light-blue-light",
          children: category
        })).slice(0, 3)
      }), e("p", {
        class: "text-xxs font-thin text-light-blue-dark dark:text-dark-blue-light mt-auto"
      })]
    })]
  }, guid);
};
var MAX_POSTS = 6;
var Blog = () => {
  const [mediumData, setMediumData] = p([]);
  const [isLoading, setIsLoading] = p(true);
  _(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hohanga").then((res) => res.json()).then((response) => {
      setMediumData(response.items);
      setIsLoading(false);
    }).catch((err) => console.log(err));
  }, []);
  return e("div", {
    class: "medium-articles h-full",
    children: [isLoading && e("div", {
      class: "text-center mt-8",
      children: e("div", {
        role: "status",
        children: [e("svg", {
          class: "inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [e("path", {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor"
          }), e("path", {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill"
          })]
        }), e("span", {
          class: "sr-only",
          children: "Loading..."
        }), e("p", {
          class: "text-light-blue-dark dark:text-dark-blue-light text-thin mt-5",
          children: "Loading posts from Medium!"
        })]
      })
    }), mediumData.slice(0, MAX_POSTS).map((article) => e(Article, {
      article
    }))]
  });
};
var $$module3$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Blog
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$6 = createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/MainContainer.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$6 = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/MainContainer.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$MainContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MainContainer;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col grow p-2 md:p-4 2xl:p-8 my-2 md:my-4 shadow-box-down-light box-decoration-slice dark:shadow-box-dark dark:bg-box-dark w-full rounded-md max-h-fit justify-center">
  ${renderSlot($$result, $$slots["default"])}
</div>`;
});
var $$file$6 = "/Users/admin/Downloads/astro-neumorphism-develop/src/components/MainContainer.astro";
var $$url$6 = void 0;
var $$module1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$6,
  default: $$MainContainer,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$5 = createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/ContainerScroll.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$5 = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/ContainerScroll.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$ContainerScroll = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ContainerScroll;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col grow p-4 2xl:p-8 my-4 shadow-box-down-light box-decoration-slice dark:shadow-box-dark dark:bg-box-dark w-full rounded-md max-h-[calc(100vh_-_40vh)] lg:max-h-[calc(100%_-_10%)] overflow-y-scroll no-scrollbar">
  ${renderSlot($$result, $$slots["default"])}
</div>`;
});
var $$file$5 = "/Users/admin/Downloads/astro-neumorphism-develop/src/components/ContainerScroll.astro";
var $$url$5 = void 0;
var $$module2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$5,
  default: $$ContainerScroll,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$4 = createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/TextSlide.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$4 = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/TextSlide.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$TextSlide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TextSlide;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex font-thin text-light-blue-dark dark:text-dark-blue-light px-6">
  <div class="relative scroller w-16 overflow-hidden">
    <span class="absolute top-0 tracking-wide font-black animate-slide-text">
      Build<br>
      Code<br>
      Create<br>
      Design
    </span>
  </div>
  <div>for everyone</div>
</div>`;
});
var $$file$4 = "/Users/admin/Downloads/astro-neumorphism-develop/src/components/TextSlide.astro";
var $$url$4 = void 0;
var $$module6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$4,
  default: $$TextSlide,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$3 = createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/pages/index.astro", { modules: [{ module: $$module2$2, specifier: "../components/Layout.astro", assert: {} }, { module: $$module2$1, specifier: "src/components/MainCard.astro", assert: {} }, { module: $$module3$1, specifier: "@components/MediumPost", assert: {} }, { module: $$module1, specifier: "src/components/MainContainer.astro", assert: {} }, { module: $$module2, specifier: "@components/ContainerScroll.astro", assert: {} }, { module: $$module6, specifier: "@components/TextSlide.astro", assert: {} }], hydratedComponents: [Blog], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set(["visible"]), hoisted: [] });
var $$Astro$3 = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/pages/index.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Operation Astroid Owaynge" }, { "default": () => renderTemplate`${renderComponent($$result, "MainCard", $$MainCard, {})}${maybeRenderHead($$result)}<div class="block lg:hidden 2xl:block overflow-auto no-scrollbar">
		${renderComponent($$result, "ContainerScroll", $$ContainerScroll, {}, { "default": () => renderTemplate`${renderComponent($$result, "MediumPost", Blog, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/MediumPost", "client:component-export": "default" })}` })}
	</div><div class="hidden lg:flex 2xl:hidden">
		${renderComponent($$result, "MainContainer", $$MainContainer, {}, { "default": () => renderTemplate`${renderComponent($$result, "TextSlide", $$TextSlide, {})}` })}
	</div>` })}`;
});
var $$file$3 = "/Users/admin/Downloads/astro-neumorphism-develop/src/pages/index.astro";
var $$url$3 = "";
var _page0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$3,
  default: $$Index,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$2 = createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/ContainerUp.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$2 = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/components/ContainerUp.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$ContainerUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContainerUp;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col py-4 px-6 md:p-4 2xl:p-8 mt-2 md:mb-4 md:mt-6 shadow-box-up box-decoration-slice dark:shadow-orange-dark dark:bg-box-dark w-full rounded-md max-h-fit justify-center">
  ${renderSlot($$result, $$slots["default"])}
</div>`;
});
var $$file$2 = "/Users/admin/Downloads/astro-neumorphism-develop/src/components/ContainerUp.astro";
var $$url$2 = void 0;
var $$module4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$2,
  default: $$ContainerUp,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$1 = createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/pages/postlist.astro", { modules: [{ module: $$module2$2, specifier: "../components/Layout.astro", assert: {} }, { module: $$module2, specifier: "@components/ContainerScroll.astro", assert: {} }, { module: $$module3$1, specifier: "@components/MediumPost", assert: {} }, { module: $$module4, specifier: "@components/ContainerUp.astro", assert: {} }], hydratedComponents: [Blog], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set(["visible"]), hoisted: [] });
var $$Astro$1 = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/pages/postlist.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$Postlist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Postlist;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astr0id Owaynge" }, { "default": () => renderTemplate`${renderComponent($$result, "ContainerUp", $$ContainerUp, {}, { "default": () => renderTemplate`${maybeRenderHead($$result)}<h1 class="font-thin leading-extra-loose md:text-lg 2xl:text-xl text-light-blue-dark dark:text-dark-blue-light">Cloudflare domains remain unreachable after the collapse</h1>` })}${renderComponent($$result, "ContainerScroll", $$ContainerScroll, {}, { "default": () => renderTemplate`${renderComponent($$result, "MediumPost", Blog, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/MediumPost", "client:component-export": "default" })}` })}` })}`;
});
var $$file$1 = "/Users/admin/Downloads/astro-neumorphism-develop/src/pages/postlist.astro";
var $$url$1 = "/postlist";
var _page1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$1,
  default: $$Postlist,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: "Module" }));
var Avatar = "/assets/avatar.a09e60af.jpeg";
var $$module3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Avatar
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata = createMetadata("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/pages/aboutme.astro", { modules: [{ module: $$module1, specifier: "src/components/MainContainer.astro", assert: {} }, { module: $$module2$2, specifier: "../components/Layout.astro", assert: {} }, { module: $$module3, specifier: "../images/avatar.jpeg", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro = createAstro("/@fs/Users/admin/Downloads/astro-neumorphism-develop/src/pages/aboutme.astro", "", "file:///Users/admin/Downloads/astro-neumorphism-develop/");
var $$Aboutme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Aboutme;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astroid Owanyge" }, { "default": () => renderTemplate`${renderComponent($$result, "MainContainer", $$MainContainer, {}, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col md:flex-row items-center space-x-4 shadow-box-up dark:shadow-orange-dark p-4 md:p-6 rounded-xl">
      <img class="p-1 mb-2 md:mb-0 w-40 h-40 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"${addAttribute(Avatar, "src")} alt="Bordered avatar">
      <div class="font-medium dark:text-white">
        <div class="mb-2 md:mb-0">Jekyll the Jedi</div>
        <div class="text-xs text-gray-500 dark:text-gray-400">
          <p>After esacping a near disaster with the 0waynge planet I've decided to settle on planet Earth. Although the force remains strong, the framework I've developed is strong enough to resist then power of the empire.</p>
        </div>
      </div>
    </div>` })}` })}`;
});
var $$file = "/Users/admin/Downloads/astro-neumorphism-develop/src/pages/aboutme.astro";
var $$url = "/aboutme";
var _page2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata,
  default: $$Aboutme,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
var pageMap = /* @__PURE__ */ new Map([["src/pages/index.astro", _page0], ["src/pages/postlist.astro", _page1], ["src/pages/aboutme.astro", _page2]]);
var renderers = [Object.assign({ "name": "astro:jsx", "serverEntrypoint": "astro/jsx/server.js", "jsxImportSource": "astro" }, { ssr: server_default }), Object.assign({ "name": "@astrojs/preact", "clientEntrypoint": "@astrojs/preact/client.js", "serverEntrypoint": "@astrojs/preact/server.js", "jsxImportSource": "preact" }, { ssr: _renderer1 })];
var _manifest = Object.assign(deserializeManifest({ "adapterName": "@astrojs/deno", "routes": [{ "file": "", "links": ["assets/aboutme-index-postlist.ff5cf4bb.css", "assets/index.32881e90.css"], "scripts": [], "routeData": { "route": "/", "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/aboutme-index-postlist.ff5cf4bb.css"], "scripts": [], "routeData": { "route": "/postlist", "type": "page", "pattern": "^\\/postlist\\/?$", "segments": [[{ "content": "postlist", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/postlist.astro", "pathname": "/postlist", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/aboutme-index-postlist.ff5cf4bb.css"], "scripts": [], "routeData": { "route": "/aboutme", "type": "page", "pattern": "^\\/aboutme\\/?$", "segments": [[{ "content": "aboutme", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/aboutme.astro", "pathname": "/aboutme", "_meta": { "trailingSlash": "ignore" } } }], "base": "/", "markdown": { "drafts": false, "syntaxHighlight": "shiki", "shikiConfig": { "langs": [], "theme": "github-dark", "wrap": false }, "remarkPlugins": [], "rehypePlugins": [], "remarkRehype": {}, "extendDefaultPlugins": false, "isAstroFlavoredMd": false }, "pageMap": null, "renderers": [], "entryModules": { "\0@astrojs-ssr-virtual-entry": "entry.mjs", "@components/MediumPost": "MediumPost.4d20429a.js", "@astrojs/preact/client.js": "client.115698f3.js", "astro:scripts/before-hydration.js": "data:text/javascript;charset=utf-8,//[no before-hydration script]" }, "assets": ["/assets/avatar.a09e60af.jpeg", "/assets/raleway-v28-latin-500.263105b8.woff2", "/assets/raleway-v28-latin-700.80f4e592.woff2", "/assets/raleway-v28-latin-200italic.26cca2dc.woff2", "/assets/raleway-v28-latin-300.f67ce158.woff2", "/assets/raleway-v28-latin-300italic.0e7a0d77.woff2", "/assets/raleway-v28-latin-regular.c78a1da5.woff2", "/assets/raleway-v28-latin-200.135a9ebf.woff2", "/assets/raleway-v28-latin-900.23b8ba30.woff2", "/assets/raleway-v28-latin-700.8e3f7520.woff", "/assets/raleway-v28-latin-300.89740e4e.woff", "/assets/raleway-v28-latin-500.f423bf43.woff", "/assets/raleway-v28-latin-200italic.9d413cfc.woff", "/assets/raleway-v28-latin-300italic.a0917be4.woff", "/assets/raleway-v28-latin-200.2cc667d3.woff", "/assets/raleway-v28-latin-regular.e1c0e97b.woff", "/assets/raleway-v28-latin-900.4c97df3d.woff", "/assets/aboutme-index-postlist.ff5cf4bb.css", "/assets/index.32881e90.css", "/MediumPost.4d20429a.js", "/client.115698f3.js", "/favicon.ico", "/chunks/preact.module.f099146f.js", "/fonts/raleway-v28-latin-200.woff", "/fonts/raleway-v28-latin-200.woff2", "/fonts/raleway-v28-latin-200italic.woff", "/fonts/raleway-v28-latin-200italic.woff2", "/fonts/raleway-v28-latin-300.woff", "/fonts/raleway-v28-latin-300.woff2", "/fonts/raleway-v28-latin-300italic.woff", "/fonts/raleway-v28-latin-300italic.woff2", "/fonts/raleway-v28-latin-500.woff", "/fonts/raleway-v28-latin-500.woff2", "/fonts/raleway-v28-latin-700.woff", "/fonts/raleway-v28-latin-700.woff2", "/fonts/raleway-v28-latin-900.woff", "/fonts/raleway-v28-latin-900.woff2", "/fonts/raleway-v28-latin-regular.woff", "/fonts/raleway-v28-latin-regular.woff2"] }), {
  pageMap,
  renderers
});
var _args = {};
var _exports = createExports(_manifest, _args);
var stop = _exports["stop"];
var handle = _exports["handle"];
var start = _exports["start"];
var running = _exports["running"];
var _start = "start";
if (_start in adapter) {
  adapter[_start](_manifest, _args);
}
export {
  handle,
  running,
  start,
  stop
};
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
