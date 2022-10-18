import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm"
import Users from "./../models/users"
import TClass from "./classes"

enum postType {
  ANSWER = "answer",
  QUESTION = "questions",
}
@Entity()
class Posts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number

  @Column()
  title: String

  @Column()
  type: postType

  @Column()
  file: String

  @ManyToOne(() => Users, (user) => user.username)
  postedby: Users

  @ManyToOne(() => TClass, (cls) => cls.id)
  from: TClass
}

export default Posts
