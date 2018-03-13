<template>
  <!-- <div class="book">

      <div class="page">
        {{msg}}
       <img class="landscape ltop" src="http://eskipaper.com/images/image-2.jpg">
       <img class="landscape lbottom" src="http://eskipaper.com/images/image-2.jpg">
      </div>
      <div class="page">
       <img class="landscape ltop" src="http://eskipaper.com/images/image-2.jpg">
       <img class="landscape lbottom" src="http://eskipaper.com/images/image-2.jpg">
      </div>
      <div class="page">
       <img class="landscape lonly" src="http://eskipaper.com/images/image-2.jpg">
      </div>
      <div class="page">
       <img class="portrait ponly" src="https://upload.wikimedia.org/wikipedia/commons/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg">
      </div>
  </div> -->
  <div class="book">

      <div class="page" v-for="pic in pics">
       <!-- :src="require(`@/assets/image-${imageNum}.png`)"> -->
       <img class="landscape ltop" :src="`/static/img/${pic}`">
       <img class="landscape lbottom" src="http://eskipaper.com/images/image-2.jpg">
      </div>

  </div>



</template>

<script>
export default {
  name: 'Photos',
  data () {
    return {
      msg: 'hoi',
      pics: ["1.jpg","1.jpg","1.jpg","1.jpg","1.jpg"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: #FAFAFA;
      font: 12pt "Tahoma";
    }

/* landscape */
    .landscape {
        width: 17cm;
        padding-left: 2cm;
    }

    .ltop {
        padding-top: 3cm;
    }

    .lbottom {
        padding-top: 3cm;
    }

    .lonly {
       padding-top: 9cm;
    }

/* portrait */
    .portrait {
        height: 17cm;
        padding-left: 4.5cm;
        padding-top: 7cm;
    }

    .page {
        width: 210mm;
        min-height: 297mm;
        --padding: 20mm;
        margin: 10mm auto;
        border: 1px #D3D3D3 solid;
        border-radius: 5px;
        background: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
    .subpage {
        padding: 1cm;
        border: 5px red solid;
        height: 257mm;
        outline: 2cm #FFEAEA solid;
    }

    @page {
        size: A4;
        margin: 0;
    }
    @media print {
        html, body {
            width: 210mm;
            height: 297mm;
        }
        .page {
            margin: 0;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            background: initial;
            page-break-after: always;
        }
    }
</style>
