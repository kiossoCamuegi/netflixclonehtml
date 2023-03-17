$(docoument).ready(function() {


    var dir = "http://www.kevmoe.com/networks/gsplayer/";
    var fileextension = ".mp4";
    var srcfiles = $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function(data) {
            //List all .mp4 file names in the page
            $(data).find("a:contains(" + fileextension + ")").each(function() {
                var filename = $(this).attr("href").replace(window.location.host, "").replace("http://", "");

                $("#container").append("<div id='div1' class='video'><video id='video1' class='vidarray' preload='none' poster='bkg.png'><source src='" + filename + "' type='video/mp4'></video></div>");
                async: false;


                window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

                window.requestFileSystem(window.PERSISTANT, 200000 * 1024 * 1024, initFS, errorHandler);

                function initFS(fs) {
                    console.log('filesystem engaged'); // Just to check if everything is OK :)
                    // place the functions you will learn bellow here
                    function errorHandler(err) {
                        var msg = 'An error occured: ';
                    };

                    function createDir(rootDir, folders) {
                        rootDir.getDirectory(folders[0], {
                            create: true
                        }, function(dirEntry) {
                            if (folders.length) {
                                createDir(dirEntry, folders.slice(1));
                            }
                        }, errorHandler);
                    };

                    createDir(fs.root, 'files/video/'.split('/'));

                    fs.root.getDirectory('video', {}, function(dirEntry) {
                        var dirReader = dirEntry.createReader();
                        dirReader.readEntries(function(entries) {
                            for (var i = 0; i < entries.length; i++) {
                                var entry = entries[i];
                                if (entry.isDirectory) {
                                    console.log('Directory: ' + entry.fullPath);
                                } else if (entry.isFile) {
                                    console.log('File: ' + entry.fullPath);
                                }
                            }

                        }, errorHandler);
                    }, errorHandler);

                    fs.root.getFile(filename, {
                        create: true,
                        exclusive: true
                    }, function(fileEntry) {
                        fileEntry.createWriter(function(fileWriter) {
                            var blob = new Blob([data], {
                                type: 'video/mp4'
                            });
                            fileWriter.write(blob);
                        }, errorHandler);

                        console.log('file downloaded');
                    }, errorHandler);

                    //Try to add an event listener for when all files are finished loading into file system. Then use another function to source the videos locally.
                    var dirReader = fs.root.createReader();
                    var entries = [];

                    // Call the reader.readEntries() until no more results are returned.

                    dirReader.readEntries(function(results) {

                        //List all .mp4 file names in the page
                        $(results).find("a:contains(" + fileextension + ")").each(function() {
                            var filename = $(this).attr("href").replace(window.location.host, "").replace("http://", "");

                            $("#container").append("<div id='div1' class='video'><video id='video1' class='vidarray' preload='none' poster='bkg.png'><source src='" + filename + "' type='video/mp4'></video></div>");
                            async: false;