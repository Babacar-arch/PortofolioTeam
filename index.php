<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>⩥ Présentation du startup informatique sénégalais - GROUP</title>
    <meta name="description" content="">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous">
    </script> -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
        integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
        integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous">
    </script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js"
        integrity="sha512-judXDFLnOTJsUwd55lhbrX3uSoSQSOZR6vNrsll+4ViUFv+XOIr/xaIK96soMj6s5jVszd7I97a0H+WhgFwTEg=="
        crossorigin="anonymous"></script>

    <script src="./view/js/jquery-3.4.1.min.js"></script>
    <script src="./view/js/app.js"></script>

    <style>
    /* .row {
        border: 1px solid black;
    } */

    /* h1 {
        border: 1px solid black;
    } */

    /* #_navbar {
        border: 1px solid black;
    } */

    ::-webkit-scrollbar {
        display: none;
    }
    </style>

</head>

<body>
    <div class="container mt-3 _header_box">
        <?php require_once "./view/header.php"; ?>
    </div>
    <h1 class="text-end me-5">Présentation de GROUP</h1>
    <div class="row p-5 mt-3 ms-5" id="_big_div">
        <div class="row" id="_about_box">
            <?php require_once "./view/about.php"; ?>
        </div>
        <div class="row mt-5 _text_left" id="_team_box">
            <?php require_once "./view/team.php"; ?>
        </div>
        <div class="row mt-5" id="_project_box">
            <?php require_once "./view/project.php"; ?>
        </div>
        <div class="row mt-5 _text_left" id="_contact_box">
            <?php require_once "./view/contact.php"; ?>
        </div>
    </div>
    <div class="row mt-5" id="_footer_box">
        <?php require_once "./view/footer.php"; ?>
    </div>

    <!-- <a id="_btn_test">test</a> -->

    <!-- <script>
    var options = {
        animation: true
    };
    var element = document.getElementById("_amar");
    var tooltip = new bootstrap.Tooltip(element, options);
    </script> -->
</body>

</html>