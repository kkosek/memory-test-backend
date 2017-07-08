name := "memory-test-backend"

version := "1.0"

scalaVersion := "2.11.8"

libraryDependencies ++= Seq(
  "com.typesafe.akka" %% "akka-slf4j" % "latest.integration",
  "com.typesafe.akka" %% "akka-actor" % "latest.integration" ,
  "com.typesafe.akka" %% "akka-typed" % "latest.integration",
  "com.typesafe.akka" %% "akka-contrib" % "latest.integration",
  "com.typesafe.akka" %% "akka-http-core" % "latest.integration",
  "com.typesafe.akka" %% "akka-http" % "latest.integration",
  "com.typesafe.akka" %% "akka-http-spray-json" % "latest.integration",
  "io.spray" %% "spray-json" % "latest.integration",
  "pl.iterators" %% "kebs-spray-json" % "1.4.3"
)
