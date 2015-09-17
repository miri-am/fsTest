if (Meteor.isClient) {
  Template.hello.events({
    'click button': function () {
      sendImage();
    }
  });
}

if (Meteor.isServer) {

}

var sendImage = function() {
    data = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCAA8AFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwChAm4bvU5q0kRGT2rPiEsf3G4q0lzJsKsvXvikBYtIcqWI5Y1YEYpttPHsCnIIqwoUglSCTTEVoocuWxU3lD0qZEABpwAI4oGUnt97/pTWtSPunFaBi2kD0FIUoAxriNwu1uh71C1swXIbBrVnj3uB71FLHSAz4xVlBxVeOrKUwJEUDtVuF1UjI/Gqy1ItAGlEsUn3ZMH0NSra4YcjHtWYpqzDM69GNAFiRCGJIxk1CwOT6VaSckfMAaR2hJyVwaAKDJ859h+tQSrwatzDBLIwIPOKpTSgAhgRQBmx1YSq8dWUoAlWpVqNaeKAJFqVDioQaeDQBaWTAprvmoQ1BNADHNVJhuzVlzVaSkBRjNWUNVIzVhDQBZU08GoFNPBNMCcGnA1CCacCaAJd1BaowTQSaQAxqvIakY1BIaAP/9k=";

    Images.insert(data, function(err, fileObj) {
        if (!err) {
            console.log("success...");
        } else {
            console.error(err);
        }
    });
}

var imageStore = new FS.Store.GridFS("images", {});

Images = new FS.Collection("images", {
  stores: [imageStore]  
});
