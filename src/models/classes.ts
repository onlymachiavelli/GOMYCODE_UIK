import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm"

import Users from "./users"
import Posts from "./../models/post"
@Entity()
class TClass extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number

  @Column()
  title: String

  @Column()
  codeauth: String

  @Column()
  about: String

  @Column()
  description: String

  @ManyToOne(() => Users, (user) => user.username)
  owner: Users

  @OneToMany(() => Posts, (post) => post.from)
  post: Posts[]
}

export default TClass
