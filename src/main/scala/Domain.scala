import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport
import spray.json._

case class Info(sex: String, indexNumber: Int)

case class DataRow(correct: Int, position: Int, time: Float)

case class Data(data: Array[DataRow])

trait Protocols extends SprayJsonSupport with DefaultJsonProtocol {
  implicit val infoFormat = jsonFormat2(Info.apply)
  implicit val dataRowFormat = jsonFormat3(DataRow.apply)
  implicit val dataFormat = jsonFormat1(Data.apply)
}