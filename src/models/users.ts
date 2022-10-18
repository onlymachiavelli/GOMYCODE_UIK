import { Column, PrimaryColumn, BaseEntity, Entity } from "typeorm"

enum TYPE {
  TEACHER = "teacher",
  STUDENT = "student",
}

@Entity()
class Users extends BaseEntity {
  @PrimaryColumn()
  username: String

  @Column()
  password: String

  @Column()
  fullname: String

  @Column()
  email: String

  @Column()
  phone: String

  @Column()
  type: TYPE

  @Column()
  isverified: boolean
  @Column()
  birthday: Date

  @Column()
  createdat: Date

  @Column()
  updatedat: Date
}

export default Users
