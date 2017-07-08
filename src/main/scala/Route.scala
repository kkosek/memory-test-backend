import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.model.StatusCodes._
import akka.http.scaladsl.marshalling.ToResponseMarshallable
import scala.concurrent.ExecutionContext.Implicits.global

class Route extends Protocols {
  def route = {
    (get & path("test" / Segment)) { fileName =>
      getFromResource(fileName)
    } ~
    post {
      (pathPrefix("/info") & entity(as[Info])) { info =>
        complete("Message received")
        (path("/results") & entity(as[Data])) { data =>
          complete("OK")
        }
      }
    }
  }
}
