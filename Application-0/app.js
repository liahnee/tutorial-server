const appId = process.env.REALM_ID;
const app = new Realm.App({ id: appId });
const credentials = Realm.Credentials.anonymous();
try {
  const user = await app.logIn(credentials);
} catch (err) {
  console.error('Failed to log in', err);
}

const DogSchema = {
  name: 'Dog',
  properties: {
    name: 'string',
    age: 'int',
  },
};

const realm = await Realm.open({
  schema: [Task.schema],
  sync: {
    user: app.currentUser,
    partitionValue: 'myPartition',
  },
});

realm.write(() => {
  realm.create('Dog', { name: 'Fido', age: 12 });
});
const dogs = realm.objects('Dog');
