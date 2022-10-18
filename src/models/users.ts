import { Entity, Column, PrimaryColumn, OneToMany, BaseEntity } from "typeorm"
import TClass from "./classes"
import Posts from "./post"
enum userType {
  STUDENT = "student",
  TEACHER = "teacher",
}

enum Sex {
  MALE = "male",
  FEMALE = "female",
}

@Entity()
class Users extends BaseEntity {
  @PrimaryColumn()
  username: String

  @Column()
  fullname: String

  @Column()
  password: String

  @Column()
  email: String

  @Column()
  phone: String

  @Column()
  isverified: boolean

  @Column()
  type: userType

  @Column()
  gender: Sex

  @Column()
  updatedat: Date

  @Column()
  createdat: Date

  @Column()
  propic: String

  @Column()
  birthdate: Date

  @OneToMany(() => TClass, (cls) => cls.owner)
  class: TClass[]

  @OneToMany(() => Posts, (post) => post.postedby)
  post: Posts[]
}

export default Users
